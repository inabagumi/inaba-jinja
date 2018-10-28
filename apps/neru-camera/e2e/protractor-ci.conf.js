const { config } = require('./protractor.conf')

exports.config = {
  ...config,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--no-sandbox', 'disable-gpu']
    }
  }
};
