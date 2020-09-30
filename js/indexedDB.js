

(function() {
  'use strict';

  //check for support
  if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
    return;
  }

  var dbPromise = idb.open('test-db4', 1, function(upgradeDb) {
    if (!upgradeDb.objectStoreNames.contains('people')) {
      var peopleOS = upgradeDb.createObjectStore('people', {keyPath: 'email'});
      peopleOS.createIndex('gender', 'gender', {unique: false});
      peopleOS.createIndex('ssn', 'ssn', {unique: true});
    }
    if (!upgradeDb.objectStoreNames.contains('notes')) {
      var notesOS = upgradeDb.createObjectStore('notes', {autoIncrement: true});
      notesOS.createIndex('title', 'title', {unique: false});
    }
    if (!upgradeDb.objectStoreNames.contains('logs')) {
      var logsOS = upgradeDb.createObjectStore('logs', {keyPath: 'id',
        autoIncrement: true});
    }
  });
})();
