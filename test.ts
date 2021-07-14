import { Builder, Capabilities, By } from "selenium-webdriver";
import { DriverService } from "selenium-webdriver/remote";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () => {
  await driver.quit();
});

test("this will add a movie and then delete it", async () => {
  //look for input with placeholder saying 'Add Movie'
  let movieInput = await driver.findElement(By.xpath("//input"));
  await movieInput.sendKeys("Up\n");
  await driver.sleep(1500);

  let deleteButton = await driver.findElement(By.id("Up")).click();
  await driver.sleep(1500);

  //find mesasage value
  //do expects to test

  let message = await driver.findElement(By.id("message"));

  let messageValue = await message.getAttribute("value");
  console.log(messageValue);
  expect(messageValue).toBe(`Up deleted!`);
});
