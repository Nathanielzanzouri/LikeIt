app.controller('AuthCtrl', ['$scope', 'auth',  '$state', function($scope, auth, $state){
  $scope.user = {};
  console.log('inside the login ctrl')
  $scope.logIn = function () {
  auth.logIn($scope.user).then(function(){
  $state.go('home');
  });
};
}])
