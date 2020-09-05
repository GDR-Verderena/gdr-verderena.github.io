  AOS.init();



function imageExists(url, callback) {
  var img = new Image();
  img.onload = function () { callback(true); };
  img.onerror = function () { callback(false); };
  img.src = url;
}


function imageValidate(url) {
  imageExists(url, function (value) {
    //Show the result
    console.log(value);
    return value;
  });
 }

