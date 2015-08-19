app.controller("MovieController", ["$scope", "$location", "$http", "$routeParams", function(a, e, b, c) {
  c.query && (a.searchDb = function() {
    b.get("http://www.omdbapi.com/?s=" + c.query).then(function(d) {
      a.movieResults = d.data.Search;
    }, function(a) {
      console.log("Houston, we have a problem");
    });
  }());
}]);
app.controller("OneMovieController", ["$scope", "$location", "$http", "$routeParams", function(a, e, b, c) {
  a.searchDb = function() {
    var d = "http://www.omdbapi.com/?t=" + c.query;
    console.log(d);
    b.get(d).then(function(b) {
      a.movieResults = b.data;
      console.log(a.movieResults);
    }, function(a) {
      console.log("Houston, we have a problem");
    });
  }();
}]);
app.controller("SearchController", ["$scope", "$location", "$http", function(a, e, b) {
  a.searchDb = function() {
    e.path("/show/" + encodeURIComponent(a.searchData));
  };
}]);