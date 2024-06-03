const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('Blog Application', () => {
  let driver;

  beforeAll(async () => {
    const service = new chrome.ServiceBuilder()
      .loggingTo('./chromedriver.log')
      .enableVerboseLogging()
      .build();

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .setChromeService(service)
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should load the home page', async () => {
    await driver.get('http://localhost:3000');
    const title = await driver.getTitle();
    expect(title).toEqual('Blog Application');
  });

  // Add more test cases for your application
});
