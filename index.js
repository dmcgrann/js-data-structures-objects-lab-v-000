// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({}, driver);
  return delete newDriver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return driver(0, driver.length - 1)
}