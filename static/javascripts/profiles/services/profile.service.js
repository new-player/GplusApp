(function () {
  'use strict';

  angular
    .module('gplus.profiles.services')
    .factory('Profile', Profile);

  Profile.$inject = ['$http'];

  function Profile($http) {
    var Profile = {
      destroy: destroy,
      get: get,
      update: update,
      updatePic: updatePic
    };

    return Profile;

    function destroy(profile) {
      return $http.delete('/api/v1/accounts/' + profile.id + '/');
    }

    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/');
    }

    function update(profile) {
      return $http.put('/api/v1/accounts/' + profile.username + '/', profile);
    }

    function updatePic(){
    	console.log("Inside updatePic");
        return $http.get('/api/avatar/change/');
    }
  }
})();