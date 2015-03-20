(function () {
  'use strict';

  angular
    .module('gplus.posts', [
      'gplus.posts.controllers',
      'gplus.posts.directives',
      'gplus.posts.services'
    ]);

  angular
    .module('gplus.posts.controllers', []);

  angular
    .module('gplus.posts.directives', ['ngDialog']);

  angular
    .module('gplus.posts.services', []);
})();
