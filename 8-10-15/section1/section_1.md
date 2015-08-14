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



