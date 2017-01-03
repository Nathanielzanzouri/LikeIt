app.controller('MainCtrl', ['$scope', 'posts', 'auth' , function($scope, posts, auth){
  $scope.posts = posts.posts;

  $scope.addPost = function() {
    if ($scope.title === '') { return; }

    posts.create({ 
      title: $scope.title, 
      link: $scope.link,
      category: $scope.category,
      author: auth.currentUser()
    });

    $scope.title = '';
    $scope.link = '';
    $scope.category ='';

  }

  $scope.incrementUpvotes = function(item) {
    posts.upvote(item);
  }
}]);