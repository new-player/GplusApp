(function () {
  'use strict';

  angular
    .module('gplus', [
    	'gplus.config',
      	'gplus.routes',
      	'gplus.authentication',
      	'gplus.layout',
      	'gplus.posts',
      	'gplus.utils',
      	'gplus.profiles'
    ]);

  angular
    .module('gplus.routes', ['ngRoute']);

  angular
  	.module('gplus.config', []);

  angular
    .module('gplus')
    .run(run);

  run.$inject = ['$http'];

  /**
   * @name run
   * @desc Update xsrf $http headers to align with Django's defaults
   */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }

})();