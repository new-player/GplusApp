(function () {
  'use strict';

  angular
    .module('gplus.authentication.services')
    .factory('Authentication', Authentication);

  Authentication.$inject = ['$cookies', '$http'];

  function Authentication($cookies, $http) {

    var Authentication = {
    		getAuthenticatedAccount: getAuthenticatedAccount,
    		isAuthenticated: isAuthenticated,
    		login: login,
    		logout: logout,
    		register: register,
    		setAuthenticatedAccount: setAuthenticatedAccount,
    		unauthenticate: unauthenticate
    };

    return Authentication;
    
    function getAuthenticatedAccount() {
    	  if (!$cookies.authenticatedAccount) {
    	    return;
    	  }

    	  return JSON.parse($cookies.authenticatedAccount);
    	}
    
    function isAuthenticated() {
    	  return !!$cookies.authenticatedAccount;
    	}
    
    function setAuthenticatedAccount(account) {
    	  $cookies.authenticatedAccount = JSON.stringify(account);
    	}
    
    function unauthenticate() {
    	  delete $cookies.authenticatedAccount;
    	}
    
    
    
    function login(email, password) {
    	  return $http.post('/api/v1/auth/login/', {
    	    email: email, password: password
    	  }).then(loginSuccessFn, loginErrorFn);

    	  /**
    	   * @name loginSuccessFn
    	   * @desc Set the authenticated account and redirect to index
    	   */
    	  function loginSuccessFn(data, status, headers, config) {
    	    Authentication.setAuthenticatedAccount(data.data);

    	    window.location = '/';
    	  }

    	  /**
    	   * @name loginErrorFn
    	   * @desc Log "Epic failure!" to the console
    	   */
    	  function loginErrorFn(data, status, headers, config) {
    	    console.error('Epic failure!');
    	  }
    	}
    
    function logout() {
  	  return $http.post('/api/v1/auth/logout/')
  	    .then(logoutSuccessFn, logoutErrorFn);

  	  /**
  	   * @name logoutSuccessFn
  	   * @desc Unauthenticate and redirect to index with page reload
  	   */
  	  function logoutSuccessFn(data, status, headers, config) {
  	    Authentication.unauthenticate();

  	    window.location = '/';
  	  }

  	  /**
  	   * @name logoutErrorFn
  	   * @desc Log "Epic failure!" to the console
  	   */
  	  function logoutErrorFn(data, status, headers, config) {
  	    console.error('Epic failure!');
  	  }
  	}

    function register(email, password, username) {
    	  return $http.post('/api/v1/accounts/', {
    	    username: username,
    	    password: password,
    	    email: email
    	  }).then(registerSuccessFn, registerErrorFn);

    	  /**
    	  * @name registerSuccessFn
    	  * @desc Log the new user in
    	  */
    	  function registerSuccessFn(data, status, headers, config) {
    	    Authentication.login(email, password);
    	  }

    	  /**
    	  * @name registerErrorFn
    	  * @desc Log "Epic failure!" to the console
    	  */
    	  function registerErrorFn(data, status, headers, config) {
    	    console.error('Epic failure!');
    	  }
    	}
    
    
  }
})();
