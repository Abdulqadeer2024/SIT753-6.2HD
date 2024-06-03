const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000');
    let title = await driver.getTitle();
    console.log('Page Title is: ' + title);
  } finally {
    await driver.quit();
  }
})();
