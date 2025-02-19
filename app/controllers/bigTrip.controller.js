const db = require('../db');

const pointsTable = db.BtPoints;
const offersTable = db.BtOffers;
const destinationsTable = db.BtDestinations;
const offerTypesTable = db.BtOfferTypes;


class BigTripController {
  async getAllPoints(req, res) {
    const points = await pointsTable.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      raw: true
    });

    return res.json(points);
  }

  async getAllOffers(req, res) {
    const offerTypes = await offerTypesTable.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      raw: true
    });

    const offerTypesPrepared = offerTypes.map(offerType => ({
      type: offerType.type,
      offers: []
    }));

    const offers = await offersTable.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      raw: true
    });

    for (let i = 0; i < offers.length; i++) {
      for (let j = 0; j < offerTypesPrepared.length; j++) {
        if (offers[i].type === offerTypesPrepared[j].type) {
          delete offers[i].type;
          offerTypesPrepared[j].offers.push(offers[i]);
          break;
        }
      }
    }

    return res.json(offerTypesPrepared);
  }

  async getAllDestinations(req, res) {
    const destinations = await destinationsTable.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      raw: true
    });

    return res.json(destinations);
  }

  async createPoint(req, res) {
    try {
      const newPointData = req.body;
      const newPoint = await pointsTable.create(newPointData, {raw: true});

      return res.json(newPoint);
    } catch (err) {
      return res.status(500).json(
        {
          message: 'Error to create point',
          error: err.message
        });
    }
  }

  async updatePoint(req, res) {
    try {
      const pointId = req.params.point_id;
      const newPoint = req.body;

      const pointToUpdate = await pointsTable.findOne(
        {where: {id: pointId}},
        {raw: true});

      if (!pointToUpdate) {
        return res.status(404).json({message: 'Point not found'});
      }

      await pointsTable.update(newPoint, {where: {id: pointId}});

      const updatedPoint = await pointsTable.findByPk(pointId, {raw: true});
      return res.json(updatedPoint);
    } catch (err) {
      return res.status(500).json({
        message: 'Error updating point',
        error: err.message
      });
    }
  }

  async deletePoint(req, res) {
    try {
      const pointId = req.params.point_id;

      const deletedPoint = await pointsTable.findByPk(pointId, {raw: true});

      if (!deletedPoint) {
        return res.status(404).json({message: 'Point not found'});
      }

      await pointsTable.destroy({where: {id: pointId}});

      return res.status(204).json({message: 'Point deleted successfully'});
    } catch (err) {
      return res.status(500).json(
        {
          message: 'Error deleting point',
          error: err.message
        });
    }
  }
}

module.exports = new BigTripController();
