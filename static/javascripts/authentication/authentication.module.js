(function () {
  'use strict';

  angular
    .module('gplus.authentication', [
      'gplus.authentication.controllers',
      'gplus.authentication.services'
    ]);

  angular
    .module('gplus.authentication.controllers', []);

  angular
    .module('gplus.authentication.services', ['ngCookies']);
})();
