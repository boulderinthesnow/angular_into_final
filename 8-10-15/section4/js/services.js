app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [];

  ContactList.addContact = function(obj) {
    ContactList.contactList.push(obj);
  };

  ContactList.findContact = function(name) {


  };

  ContactList.removeContact = function(index) {
    // TODO
  };

  return ContactList;
});


// if the name in the path is found in the array, print that name to the show.html page

// first make it work in the controller, than move it to the services