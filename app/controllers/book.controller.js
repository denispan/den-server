const db = require('../db');
const bookingData = require('../../mocks/bookingData');

class BookController {
  static async getAllOffers(req, res) {
    try {
      const offers = await db.BookOffer.findAll({
        include: [
          {
            model: db.BookAuthor,
            attributes: ['avatar'],
          },
          {
            model: db.BookLocation,
            attributes: ['lat', 'lng'],
          }
        ],
        order: [['id', 'ASC']]
      });

      const formattedOffers = offers.map(offer => ({
        author: {
          avatar: offer.BookAuthor.avatar
        },
        offer: {
          title: offer.title,
          address: offer.address,
          price: offer.price,
          type: offer.type,
          rooms: offer.rooms,
          guests: offer.guests,
          checkin: offer.checkin,
          checkout: offer.checkout,
          features: offer.features,
          description: offer.description,
          photos: offer.photos
        },
        location: {
          lat: offer.BookLocation.lat,
          lng: offer.BookLocation.lng
        }
      }));

      return res.json(formattedOffers);
    } catch (error) {
      console.error('Error fetching offers:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async createOffer(req, res) {
    try {
      // Seed the database with mock data if it's empty
      const count = await db.BookOffer.count();
      
      if (count === 0) {
        for (const item of bookingData) {
          // Create or find author
          const [author] = await db.BookAuthor.findOrCreate({
            where: { avatar: item.author.avatar }
          });

          // Create or find location
          const [location] = await db.BookLocation.findOrCreate({
            where: {
              lat: item.location.lat,
              lng: item.location.lng
            }
          });

          // Create offer
          await db.BookOffer.create({
            ...item.offer,
            BookAuthorId: author.id,
            BookLocationId: location.id
          });
        }
      }

      return res.json({ status: 'ok' });
    } catch (error) {
      console.error('Error creating offers:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new BookController();
