Questions

##What's the difference between the $firebaseObject and $firebaseArray services? When would you use one vs. the other?
one handles objects, the other arrays. If you have multiple items and want to loop over them, use the psedo-array 

##Explain is as much detail as possible what happens when we add an element to a synchronized array using $add().
It adds the data to the remote firebase database, which then syncs with the local data.

##Why do AngularFire methods return promises?
It is because the data executes asyncronously, so the promise needs to be fufilled before actions can be taken on the result of the method