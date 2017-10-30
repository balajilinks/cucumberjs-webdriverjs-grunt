'use strict';

class GoogleHomePage {

  navigateToGoogleHomePage(context) {
    context.driver.get("http://www.google.co.uk");
  }

}

module.exports = new GoogleHomePage();
