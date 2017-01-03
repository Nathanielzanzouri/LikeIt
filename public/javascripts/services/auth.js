app.factory('auth', ['$http', '$window', function($http, $window){
   var auth = {};

   auth.saveToken = function (token) {
     $window.localStorage['rereddit-jwt'] = token;
   };

   auth.getToken = function(){
   return $window.localStorage['rereddit-jwt'];
   };

   auth.register = function (user) {
     return $http.post('/register', user).success(function(data){
       auth.saveToken(data.token);
     });
   };

   auth.isLoggedIn = function(){
   var token = auth.getToken();
   if(token){
    return true;
   } else {
    return false;
    }
   };

   auth.currentUser = function(){
    if(auth.isLoggedIn()){
      var token = auth.getToken();
      console.log('benn')
      var decodedToken = JSON.parse($window.atob(token.split('.')[1]));

     return decodedToken.username;
    }
   };

   auth.logOut = function(){
    $window.localStorage.removeItem('rereddit-jwt');
   };

   auth.logIn = function(user){
  return $http.post('/login', user).then(function (response) {
    auth.saveToken(response.data.token);
  });
};

  return auth;
}]);