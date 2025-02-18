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
    try {
      // Here you can add your data validation logic
      return res.status(200).json({ message: 'Data validated successfully' });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new KBookingController();
