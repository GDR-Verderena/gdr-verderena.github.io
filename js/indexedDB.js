

if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');

}
else{

  
  
  

    let request = window.indexedDB.open('notes_db', 1);
  
   request.onupgradeneeded = function(e) {

    // Grab a reference to the opened database
    let db = e.target.result;

    // Create an objectStore to store our notes in (basically like a single table)
    // including a auto-incrementing key
    let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement:true });

    // Define what data items the objectStore will contain
    objectStore.createIndex('title', 'title', { unique: false });
    objectStore.createIndex('body', 'body', { unique: false });

    console.log('Database setup complete');
       addData(db);
  };
  
  /*
// Create an instance of a db object for us to store the open database in
let db;

window.onload = function() {
  // Open our database; it is created if it doesn't already exist
  // (see onupgradeneeded below)
  let request = window.indexedDB.open('notes_db', 1);

  // onerror handler signifies that the database didn't open successfully
  request.onerror = function() {
    console.log('Database failed to open');
  };

  
  
    // onsuccess handler signifies that the database opened successfully
  request.onsuccess = function() {
    console.log('Database opened succesfully');

    // Store the opened database object in the db variable. This is used a lot below
    db = request.result;

    // Run the displayData() function to display the notes already in the IDB
  //  displayData();
  };
  
  
   // Setup the database tables if this has not already been done
  request.onupgradeneeded = function(e) {

    // Grab a reference to the opened database
    let db = e.target.result;

    // Create an objectStore to store our notes in (basically like a single table)
    // including a auto-incrementing key
    let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement:true });

    // Define what data items the objectStore will contain
    objectStore.createIndex('title', 'title', { unique: false });
    objectStore.createIndex('body', 'body', { unique: false });

    console.log('Database setup complete');
  };
  
  
  
  
  
  
addData();
  
  
  
  };
  
  */













function addData(db) {


  
    // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
    let newItem = { title: 'João', body: 'Gomes' };

    // open a read/write db transaction, ready for adding the data
    let transaction = db.transaction(['notes_os'], 'readwrite');

    // call an object store that's already been added to the database
    let objectStore = transaction.objectStore('notes_os');

    // Make a request to add our newItem object to the object store
    var requestAdd = objectStore.add(newItem);
    requestAdd.onsuccess = function() {
      // Clear the form, ready for adding the next entry
      console.log('request add sucess');
    };

    // Report on the success of the transaction completing, when everything is done
    transaction.oncomplete = function() {
      console.log('Transaction completed: database modification finished.');

      // update the display of data to show the newly added item, by running displayData() again.
    
    };

    transaction.onerror = function() {
      console.log('Transaction not opened due to error');
    };
  
  
}
  
  



  
}




