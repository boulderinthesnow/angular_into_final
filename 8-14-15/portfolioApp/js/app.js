var app = angular.module("portfolioApp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider   
      .when('/', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController',
        routeName: 'projects'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController',
        routeName: 'projects'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController',
        routeName: 'bio'
      })
      .when('/resume', { 
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController',
        routeName: 'resume'
      })
      .when('/add', { 
        templateUrl: 'partials/add.html',
        controller: 'AddController'
      })
      .when('/divide', { 
        templateUrl: 'partials/divide.html',
        controller: 'DivideController'
      })
      // .when('/:any', {  // catchall
      //   templateUrl: 'partials/projects.html',
      //   controller: 'ProjectsController',
      //   routeName: 'projects'
      // })
      .otherwise({
        redirectTo: "/"
      });

});
app.run(function($rootScope){
   $rootScope.$on('$routeChangeStart', function (evt, next, currentRoute) {
        $rootScope.isActive = next.$$route.routeName;
   })
})
