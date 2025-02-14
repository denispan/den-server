const { renderTemplate } = require('../utils/template');

class EchoController {
  async echo(req, res) {
    try {
      const data = req.method === 'POST' ? req.body : req.query;
      
      const html = await renderTemplate('echo.html', {
        method: req.method,
        path: req.path,
        data: JSON.stringify(data, null, 2)
      });

      res.send(html);
    } catch (error) {
      console.error('Error rendering template:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new EchoController();
