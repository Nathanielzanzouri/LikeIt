app.controller('PostsCtrl', ['$scope', 'auth','posts', 'post', function($scope,auth, posts, post) {
  $scope.post = post;

  $scope.addComment = function(){
    if($scope.body === '') { return; }

    posts.addComment(post._id, {
      body: $scope.body,
      author: auth.currentUser()
    }).success(function(comment) {
      $scope.post.comments.push(comment);
    });

    $scope.body = '';
  };

  $scope.incrementUpvotes = function(comment){
    posts.upvoteComment(post, comment);
  };
}]);