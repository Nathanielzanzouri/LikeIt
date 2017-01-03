app.factory('posts', ['$http', function($http) {
  var postService = {
    posts: [],

    getAll: function() {
      return $http.get('/posts').then(function(data) {
  
        angular.copy(data.data, postService.posts);
      });
    },

    get: function(id) {
      return $http.get('/posts/' + id).then(function(res){
        return res.data;
      });
    },

    create: function(post) {
      return $http.post('/posts', post).success(function(data){
        postService.posts.push(data);
      });
    },
 // for increasing the upvotes to one post
    upvote: function (post) {
      
      return $http.put('/posts/' + post._id + '/upvote').then(function (res) {

        postService.getAll();
      });
    },

    addComment: function(id, comment) {
      return $http.post('/posts/' + id + '/comments', comment);
    },

    upvoteComment: function(post, comment) {
      
      return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/upvote', null).then(function (res) {
      comment.upvotes += 1;
        postService.getAll();
      });
    }
  };
  

  return postService;
}]);