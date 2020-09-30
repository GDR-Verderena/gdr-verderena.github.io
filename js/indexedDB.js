

window.onload = function() {
  // Open our database; it is created if it doesn't already exist
  // (see onupgradeneeded below)
  let request = window.indexedDB.open('notes_db', 1);

  // onerror handler signifies that the database didn't open successfully
  request.onerror = function() {
    console.log('Database failed to open');
  };
