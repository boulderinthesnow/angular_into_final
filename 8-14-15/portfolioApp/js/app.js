var app = angular.module("portfolioApp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider   
      .when('/', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/resume', { 
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .when('/:any', {  // catchall
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
});

