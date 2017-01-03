app.controller('AuthCtrlz', ['$scope', 'auth', '$state', function($scope, auth, $state){
  $scope.user = {};
  console.log('inside the auth ctrl')
 
  $scope.register = function () {
    console.log("auth.test");
    auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };
}])

