## Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?

#### Angular requires fewer lines of code than the others to do the same thing. It doesn't use setters and getters. Larger community for Angular, and more modules. It is fast due to being small -- it doesn't require jquery or underscore like other libraries. 

## People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?

#### Directives are considered complex, especially transclusion. 
#### scope hierarchy uses Prototypical inheritance which sucks for people coming from OO languages like Java.
#### Angular expressions used within the view layer can become overly complex and impossible to test in isolation. Also, mistakes are sometimes silently ignored and hard to find.
## Is Angular an MVC framework?
#### yes
## Why did I say jQuery is "sort of" a dependency of Angular? Does it depend on it or not?!
#### angular uses jQuery lite, which is basically a super minimalized version of jQuery that is just enough for Angular to run.
## Read the docs for ng-app. What is it and what does it do?
#### it sets the root element of the page in order to connect Angular. Angular applications cannot be setup inside each other.
#### ngApp is the most common way to bootstrap an application
## What does ng-model do?
#### it has 2 way data binding and can be put inside of form elements
#### it will try to bind a property onto the current scope, if it doesn't exist, it will be created and added to the scope
## What is "dirty checking"?
#### it is the digest of angular, which scans the scopes for changes. 
#### it updates the val without using getters and setters from the model
## What are those {{ }} expressions? Are they Handlebars?
#### they are used to demark expressions, and are evaluated against the scope object. They are not handlebars.
## Explain what 2-way data binding is.
#### 2 way data binding in the ability to have data transfer btwn the view and the model and vice versa.
## BONUS: Research the $digest loop
#### digest loop has 2 components the watch list and the evalAsync list
#### when we use a ng tag (bind an elements) we add a watch into the watch list
#### when something changes with that property Angular changes that prop all places connected to Angular.
## EXERCISE: With one single expression, prove that the context angular expressions run is not the window object. What is it instead?
#### alert won't run b/c not operating on the window object
## What are Angular expressions? How do they compare to EJS/ERB tags?
#### angular expressions are code snippets that exist inside double curly brace bindings. They can't handle loops, arrays and objects like ERB and EJS

##What happens when you write invalid code in an expression? What type of error do you get?
#### you get regular html of the angular expressions.

##What are Angular filters? Name 4 built-in filters, including one that we haven't used yet.
#### they modify data that is shown on the view without modifying the data in the model. uppercase, lowercase, number, currency, orderBy are examples of filters.
##We'll soon see how to create custom filters. What is a use case for a custom filter?
#### custom filters can be useful when you need to filter the data in a specific way outside of the built in options.

## What is scope?
#### Scope links between a model and a view though a controller. The controller sets the model properties, and the scope accesses the controller and shows the info on the view.

## What are Angular modules?
#### An Angular module defines an application, and it is a container for different parts of an application. 

## Why do we pass in $scope as an argument to controller functions?
#### because we want to use scope instances as properties inside the controller so we can use them in the views inside the controller scope.

## Name at least 3 built-in directives that we have used so far.
#### ng-init, ng-repeat, ng-model

## EXERCISE: Inspect an element that is hidden by ng-show/hide in the browser. What does Angular do to hide an element?
#### it adds the class ng-hide

## EXERCISE: Create a simple password validator like the one shown below. If the password is less than 6 characters, hide the submit button and show the error message. Otherwise, show the button and hide the error

## Why use ng-src and ng-href?
#### ng-src is used to render image files, ng-href allows for html links with the {{}} parameters available

##What are directives?
#### directives are markers on a DOM element such as ng-class

##Does ng-class require an object to be passed in?
#### nope, string, object or array all work

## What order does an ng-repeat display items in?
#### ng-repeat displays items in order

##How does ng-repeat handle duplicate data?
#### it does not allow for duplicate data unless the track by is changed

## EXERCISE: Explain in as much detail as you can what happens when you click the button. Why does number update in the template without us telling it to?
#### when the button is clicked the randomNumber function runs. This functions changes the value of the number property of the scope inside clickController. That value update universally when chnaged, including where it shows in the view.

##What are possible issues with this new file structure?
#### forgetting to reference the correct directory will cause an error.
#### if elements needs to be references between the js files, it connect be done within the same file

##Why do we want to serve our application in the first place? It seems to work fine when we just open index.html in the browser..
#### Because opening the index.html file does not simulate what our website would look like when hosted out on the internet -- which is really the point of a website. 

## QUESTION: Why does Angular put a # in the route path?
#### it sets the base route path in angular

##Why isn't ngRoute part of Angular core? Name at least 2 other Angular modules we could use
#### it used to be part of the core, but it was taken out when other frameworks modularized their routing
#### ngInfiniteScoll -- infinite scrolling for angular
#### ng-file-upload -- Angular directive to upload files
#### angular-ui -- companion suite for AngularJS

##Compare and contrast client-side routing with server-side routing
#### they are both types of routing. One is run on the client's browser, the other on the server. Client side routing is usually used for single page apps. For servie side apps, AJAX calls are made to provide code from the server to the client side

##Aside from route definitions, what else can go in a .config()?
#### custom providers can be added to the route provider. Instances cannot be added, the provider itself must be added


##What is $rootScope?
#### it is the top most scope, and is parent to all scopes in the app, where all the following scopes inherit it's properties. It is attached to the element wheere ng-app is declared


##What is the $routeChangeSuccess event?
#### it occurs when a route change has successfully executed.

## EXERCISE: Read about the same origin policy (wikipedia has some good info too) and Cross-Origin Resource Sharing or CORS. Describe what both the same origin policy and CORS are.
#### same origin policy refers to the idea that a XML request must come from the same machine. This prevents malicious behavior.
#### CORS refers to the way requests can safely be made across from different sites.

## EXERCISE: Try using $http.get() to make a request to https://itunes.apple.com/search?term=jack+johnson and display the title of every post on your template. You should get an error. What was the error? Why did the api.github.com domain work and not the itunes.com domain?
#### the request ran into the cross browser security feature of same origin policy. The security of the itunes app is more restricted.

## EXERCISE: Since making a request to https://itunes.apple.com/search?term=jack+johnson didn't work, go to the url in your browser and copy all the json that gets returned. Save the json data into a file in your app called itunes.json. Use the $http.get() service to make a request to get the itunes.json file. Display the title of every post on your template. Why does this method for getting the json data work?
####

##What is a service? Is there a Ruby or JavaScript equivalent to Angular services?
#### A service is objects that only instantiate when they are needed. It also only gets instantiated once per application. It is used to share data and functions across the application.

##Explain in as much detail as possible what happens under the hood of $http.get()
#### it sends a request to some url, and then runs a callback function with the data that returns from the request. Optionally it has a separate callback to handle error conditions.

##What is $q and how does it relate to $http?
#### $http executes multiple requests  all one once, where $g execuates async requests one after another. Generally, for a single HTTP call use $http, and when having many calls use $q

##EXERCISE: Look at an angular app you have made previous (reddit clone or your portfolio site). What dependencies are there? Where do you see dependencies other than the contoller?
#### in my app I used the $scope, $location and $http dependencis. There can potentially be many more than that. 

##EXERCISE: In the above example (MathController) does the order of the dependencies matter? Does $scope have to come before $routeParams? Do the names matter? Could we name them something else?
#### the order does not matter, but the names do matter as they reference things we are calling on but not defining. 

##EXERCISE: DO NOT SKIP THIS EXERCISE. In production code, you typically want your javascript file to be as small as possible so that it can be downloaded faster. To make the files smaller, developers minify their js files. Find a minification tool and minify your js code. Update your html file so that it now points to your newly minified js files. Does your angular app still work? If it stopped working, what is the problem?
#### the minification changed my variable names so they no longer use scope, and scope itself isn't being called anymore as it is no longer defined. Inline annotation solves this. 

##EXERCISE: So far we have mainly seen one way to do dependency injection. Research and figure out the other two ways. Which one is the best practice?
#### Factory methods, module methods and controllers are the 3 places where dependecy injection can occur.

##EXERCISE: When using inline array annotation does the order of anything matter? What order should match?
#### yes, the order matters, as the references need to refer to the minified variable names in the correcr order
##EXERCISE: Name at least 3 angular built in services that we have used so far.
#### http, scope, location


##EXERCISE: Read the docs for the q promise library. Why would you prefer to use a promise over a callback? What advantage does it have?
#### promises are cleaner, easier to read, and when data return from a promise it doesn't require chained callbacks like is required with callbacks. With a promise, until the function running inside the promise is complete the promise is not fulfilled.

##Name at least 5 built in directives you've used so far.
#### ng-init, ng-view, ng-app, ng-repeat, ng-model, ng-show, ng-if, ng-click  




