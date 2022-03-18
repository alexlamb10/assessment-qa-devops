
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(2000)
})

test('Clicking Draw displays id = "choices"', async () => {
    let drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()

    await driver.sleep(3000)

})

test('Clicking add to duo displays robot in the div for player-duo', async () => {
    let add = await driver.findElement(By.xpath("(//button)[2]"))

    await add.click()

    await driver.sleep(5000)
})