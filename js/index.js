  AOS.init();







function showNotification() {
  Notification.requestPermission(function(result) {
	  

    if (result === 'granted') {
	    
	    
      navigator.serviceWorker.ready.then(function(registration) {
	      

      var notification =  registration.showNotification('GDR Verderena Newsletter', {
          body: 'Psst! Psst! \nNão percas as Novidades de GDR Verderena 🎯',
          lang: 'pt-PT',
         vibrate: [100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100, 100, 100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100, 100, 100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 50, 50, 100, 800 ],
          tag: 'Newsletter',
	  renotify: true,
	  icon: 'https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png',
	  data: {
      		  createdAt: new Date(Date.now()).toString(),
    	           message: 'Hello, World!'
          },
	  dir: 'auto',
	  requireInteraction: true,
	  badge: 'https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png',
	  actions: [
      	{
        action: 'coffee-action',
        title: 'Website',
        icon: 'https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png'
      	},
      	{
        action: 'doughnut-action',
        title: 'Facebook',
        icon: 'https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png'
      	}
    ]
		
		
        });
	           
	      
      });
    }
  });
	
}




navigator.serviceWorker.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'coffee-action') {
    console.log('Website');
  } else {
    clients.openWindow("/about");
  }
}, false);







if ('actions' in Notification.prototype) {
 console.log('👌');
} else {
  // Action buttons are NOT supported.
	 console.log('👎');
}

//Teste



//Teste Finish

/*

function spawnNotification(theBody,  theTitle, theLink) {
  var options = {
    body: 'GDR Notification!',
    icon: 'https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png',
	  requireInteraction: true,
	  badge: 'https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png',
	   lang: 'pt-PT',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'GDR VERDERENA!!',
	  renotify: true
  }
  var notification = new Notification(theTitle, options);
  notification.onclick = function(event) {
   // event.preventDefault(); // prevent the browser from focusing the Notification's tab
    window.open(theLink, '_blank');
  }

  setTimeout(notification.close.bind(notification), 7000);
}

spawnNotification('Psst! Psst! \nNão percas as Novidades de GDR Verderena 🎯', 'GDR Verderena Newsletter', 'https://gdrverderena.pt/blog/');

*/








function myFunction() {
  var checkBox = document.getElementById("customSwitch1");
  var text = document.getElementById("label");
  
   var sun = document.getElementById("sun");
   var moon = document.getElementById("moon");

  
  if (checkBox.checked == true){
      //text.innerHTML = "New text!";
    sun.style.display = "none";
    moon.style.display = "inline";
    
  
   
  } else {
      //text.innerHTML = "New text2!";
    moon.style.display = "none";
    sun.style.display = "inline";
   
    
  
  }
}








var formValues = JSON.parse(localStorage.getItem('formValues')) || {};
var $checkboxes = $("#checkbox-container :checkbox");






function updateStorage(){
  $checkboxes.each(function(){
    formValues[this.id] = this.checked;
  });

 
  localStorage.setItem("formValues", JSON.stringify(formValues));
}



$checkboxes.on("change", function(){

  updateStorage();
});

// On page load
$.each(formValues, function(key, value) {
  $("#" + key).prop('checked', value);
});






myFunction();





!(function($) {
  "use strict";
	
	
	
  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");

    $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') + "')");
    $(this).children('.carousel-background').remove();
  });

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  });
})(jQuery);



//$(img).attr(draggable: false);

if ('storage' in navigator && 'estimate' in navigator.storage) {
  navigator.storage.estimate().then(({usage, quota}) => {
    console.log(`Using ${usage} out of ${quota} bytes.`);
  });
}



$(function(){
    $(".post").slice(0, 5).show(); // select the first 5
    $("#load").click(function(e){ // click event for load more
        e.preventDefault();
        $(".post:hidden").slice(0, 5).show(); // select next 5 hidden posts and show them
        if($(".post:hidden").length == 0){ // check if any hidden ppost still exist
          
		$("#load").hide(); // hide the button
		
           // alert("No more divs"); // alert if there are none left
        }
    });
});







var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


imageExists = function (url, callback) {
  var img = new Image();
  img.onload = function () { callback(true); };
  img.onerror = function () { callback(false); };
  img.src = url;
}


imageValidate = function (url) {
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
	
	if (navigator.vibrate) { 
    window.navigator.vibrate(50); 
} 
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
        href: 'https://gdr-verderena.github.io' + url ,
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


