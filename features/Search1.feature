Feature: Search One feature
  As a user of Webdriverjs.com
  I want to search keywords
  So that I can see the results

  Scenario: Check Parallel
    Given I am on the webdriver.js webpage
    When I search for "Webdriverjs"
    Then I should see search results