'use strict';

require('chromedriver');

var seleniumWebdriver = require('selenium-webdriver'),
    By = seleniumWebdriver.By,
    until = seleniumWebdriver.until;
var fs = require('fs');
var {defineSupportCode} = require('cucumber');
var platform = process.env.PLATFORM || "CHROME";

var buildAndroidDriver = function() {
  return new seleniumWebdriver.Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'Android',
      deviceName: 'Android device',
      browserName: 'Chrome'
    }).
    build();
};

var buildChromeDriver = function() {
  return new seleniumWebdriver.Builder().forBrowser("chrome").build();
};

var buildFirefoxDriver = function() {
    return new seleniumWebdriver.Builder().forBrowser("firefox").build();
};

var buildDriver = function() {
  switch(platform) {
    case 'ANDROID':
      return buildAndroidDriver();
    case 'FIREFOX':
      return buildFirefoxDriver();
    default:
      return buildChromeDriver();
  }
};

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
});


function CustomWorld() {

  var screenshotPath = "screenshots";
  this.driver = buildDriver();
  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld);
});