####EXERCISE
####What is accessible in the directive's scope? How is data being passed to the directive? What is different about the gs-yoyo-details element from the first example?
yoyoData is accessable through the variable yoyo. Data is being passed to the directive from the YoyoController when it renders the yoyo-details html page
In the first example the yoyo variable was contained soley inside the Yoyo Controller. If we needed to use the yoyo variable inside another Controller, we'd be in trouble. The second syntax allows the variable to be.


####EXERCISE
####How is the code able to call element.on and element.css? What type of object is it? Look in the angular docs for all available methods.
it is a jquery lite object if jquery isn't available. 
jqLite provides only the following jQuery methods:

* addClass()
* after()
* append()
* attr() - Does not support functions as parameters
* bind() - Does not support namespaces, selectors or eventData
* children() - Does not support selectors
* clone()
* contents()
* css() - Only retrieves inline-styles, does not call getComputedStyle(). As a setter, does not convert numbers to strings or append 'px'.
* data()
* detach()
* empty()
* eq()
* find() - Limited to lookups by tag name
* hasClass()
* html()
* next() - Does not support selectorsx
* on() - Does not support namespaces, selectors or eventData
* off() - Does not support namespaces, selectors or event object as parameter
* one() - Does not support namespaces or selectors
* parent() - Does not support selectors
* prepend()
* prop()
* ready()
* remove()
* removeAttr()
* removeClass()
* removeData()
* replaceWith()
* text()
* toggleClass()
* triggerHandler() - Passes a dummy event object to handlers.
* unbind() - Does not support namespaces or event object as parameter
* val()
* wrap()