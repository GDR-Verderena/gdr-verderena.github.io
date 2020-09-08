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











/*

	function filter(tag) {
  setActiveTag(tag);
  showContainer(tag);
}

function setActiveTag(tag) {
  // loop through all items and remove active class
  var items = document.getElementsByClassName('blog-tag-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }

  // set the selected tag's item to active
  var item = document.getElementById(tag + '-item');
  if(item) {
    item.setAttribute('class', 'blog-tag-item active');
  }
}

function showContainer(tag) {
  // loop through all lists and hide them
  var lists = document.getElementsByClassName('blog-list-container');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'blog-list-container hidden');
  }

  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container');
  if(list) {
    list.setAttribute('class', 'blog-list-container');
  }
}




*/







window.fbAsyncInit = function () {
  FB.init({
    appId: '634330340852989',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v8.0'
  });
};


sharePost = function (title, description, url) {
  //const url= document.getElementById("url").href;
  //const description = document.getElementById("description").textContent;
  //const title = document.getElementById("title").textContent;
  let shareData = {
    title: title,
    text: description,
    url: url,
  }

  //  const btn = document.querySelector('.share');
  const btn = document.getElementById("share");
  const resultPara = document.querySelector('.result');
  if (navigator.share) {

    navigator.share(shareData)
      .then(() =>
        resultPara.textContent = 'MDN shared successfully'
	 //   console.log("Shared Web Api");
      )
      .catch((e) =>
        resultPara.textContent = 'Error: ' + e
	 //    console.log('Error: ' + e);
      )

  } else {
    console.log("oops");
    //location.href = "https://facebook.com/sharer.php?u={{ site.url }}"+url;



    FB.ui(
      {
        method: 'share',
        href: '{{ site.url }}'+url,
      },
      // callback
      function (response) {
        if (response && !response.error_message) {
          alert('Posting completed.');
        } else {
          alert('Error while posting.');
        }
      }
    );



  }
}

