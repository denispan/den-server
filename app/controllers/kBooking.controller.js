const bookingData = require('../assets/kBooking/mocks/bookingData');

class KBookingController {
  async getMockData(req, res) {
    try {
      return res.json(bookingData);
    } catch (err) {
      return res.status(400).json({error: err});
    }
  }

  async assertData(req, res) {
    return res.status(200);
  }
}

module.exports = new KBookingController();
