'use strict';

var seleniumWebdriver = require('selenium-webdriver'),
    By = seleniumWebdriver.By,
    until = seleniumWebdriver.until;

var googleHomePage = require('../pages/GoogleHomePage');

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then, After}) {

  Given('I am on the webdriver.js webpage', function() {
    this.driver.get('http://www.webdriverjs.com/');
  });

  When('I search for {string}', function (text) {
     this.driver.findElement(By.css('.search-field.form-control')).sendKeys(text);
     this.driver.findElement(By.css('button.search-submit i')).click();
  });

  Then('I should see search results', function () {
      this.driver.wait(until.elementTextIs(this.driver.findElement(By.css('.vl-main-header>h1')), "Search Results for: Webdriverjs"), 10000);
  });

   When(/^I search Google for "([^"]*)"$/, function (searchQuery) {
      // this.driver.get('http://www.google.co.uk/');
      googleHomePage.navigateToGoogleHomePage(this);
      this.driver.findElement(By.name('q')).sendKeys(searchQuery,seleniumWebdriver.Key.ENTER);
   });

   Then(/^I should see "([^"]*)" in the results$/, function (keywords) {

   });

   Then(/^I should see some results$/, function () {

   });

});
