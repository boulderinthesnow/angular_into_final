app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [];

  ContactList.addContact = function(obj) {
    ContactList.contactList.push(obj);
  };

  ContactList.findContact = function(name) {
    console.log(name, "you made it!")

    console.log(ContactList.contactList,"*********THECONTACTLIST.CONTACTLIST**********");
    for (each in ContactList.contactList) {
      console.log(each.name,"*********EACH.NAME**********");
    console.log(name,"*********NAME**********");
    
      if (each.name === name) {
        console.log("name found")
      }
    }

  };

  ContactList.removeContact = function(index) {
    // TODO
  };

  return ContactList;
});


// if the name in the path is found in the array, print that name to the show.html page

// first make it work in the controller, than move it to the services