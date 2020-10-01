AOS.init();






function myFunction() {
  var checkBox = document.getElementById("customSwitch1");
  var text = document.getElementById("label");

  var sun = document.getElementById("sun");
  var moon = document.getElementById("moon");

  if (checkBox.checked == true) {
    //text.innerHTML = "New text!";
    sun.style.display = "none";
    moon.style.display = "inline";
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    //text.innerHTML = "New text2!";
    moon.style.display = "none";
    sun.style.display = "inline";
    trans();
    document.documentElement.setAttribute("data-theme", "light");	
  }
}




if(window.localStorage){
var formValues = JSON.parse(localStorage.getItem("formValues")) || {};
var $checkboxes = $("#checkbox-container :checkbox");

function updateStorage() {
  $checkboxes.each(function () {
    formValues[this.id] = this.checked;
  });

  localStorage.setItem("formValues", JSON.stringify(formValues));
}

$checkboxes.on("change", function () {
  updateStorage();
});

// On page load
$.each(formValues, function (key, value) {
  $("#" + key).prop("checked", value);
});
}

myFunction();



/*

if ("showTrigger" in Notification.prototype) {
  console.log('showTrigger is Enable');
}
else{
  console.log('showTrigger is NOT Enable');
}
*/


/*

registerNotification();



function registerNotification() {
	Notification.requestPermission(permission => {
		if (permission === 'granted'){ registerBackgroundSync() }
		else console.error("Permission was not granted.")
	})
}



function registerBackgroundSync() {
    if (!navigator.serviceWorker){
        return console.error("Service Worker not supported")
    }

    navigator.serviceWorker.ready
    .then(registration => registration.sync.register('syncAttendees'))
    .then(() => console.log("Registered background sync"))
    .catch(err => console.error("Error registering background sync", err))
}


self.addEventListener('sync', function(event) {
	console.log("sync event", event);
    if (event.tag === 'syncAttendees') {
        event.waitUntil(syncAttendees()); // sending sync request
    }
});






function syncAttendees(){
	return update({ url: `https://gdrverderena.pt/blog/atom.xml` })
    	.then(refresh)
    	.then((attendees) => self.registration.showNotification(
    		`${attendees.length} attendees to the PWA Workshop`
    	))
}



*/


/* Test */

if ("Notification" in window) {
	function getSW() {
		return navigator.serviceWorker.getRegistration("/sw.js");
	}

	async function onActionsClick() {
		const reg = await getSW();
		/**** START actionsNotification ****/
		const title = "GDR Verderena Newsletter";
		const subscriberEmail = document.querySelector("#subscriberEmail").value;
		const options = {
			actions: [
				{
					action: "coffee-action",
					title: "Website",
					icon:
						"https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png"
				},
				{
					action: "doughnut-action",
					title: "Facebook",
					icon:
						"https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png"
				},
				{
					action: "gramophone-action",
					title: "gramophone",
					icon:
						"https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png"
				},
				{
					action: "atom-action",
					title: "Atom",
					icon:
						"https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png"
				}
			],

			body:
				"Psst! Psst!" +
				"\n" +
				subscriberEmail +
				"\nNão percas as Novidades de GDR Verderena 🎯",
			lang: "pt-PT",
			vibrate: [
				100,
				200,
				100,
				200,
				100,
				200,
				100,
				200,
				100,
				100,
				100,
				100,
				100,
				200,
				100,
				200,
				100,
				200,
				100,
				200,
				100,
				100,
				100,
				100,
				100,
				200,
				100,
				200,
				100,
				200,
				100,
				200,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				50,
				50,
				100,
				800
			],
			tag: "Newsletter",
			renotify: true,
			icon:
				"https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png",
			data: {
				createdAt: new Date(Date.now()).toString(),
				message: "Hello, World!",
				dateOfArrival: Date.now(),
				primaryKey: 1
			},
			dir: "auto",
			requireInteraction: true,
			badge:
				"https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png"
		};

		Notification.requestPermission(function (result) {
			if (result === "granted") {
				reg.showNotification(title, options);
			}
		});
		/**** END actionsNotification ****/
	}

	function isActionsSupported() {
		return "actions" in Notification.prototype;
	}

	window.addEventListener("load", () => {
		if (!isActionsSupported()) {
			return;
		}

		const btn = document.querySelector(".js-notification-actions");
		const form = document.querySelector("#subscribe");
		btn.disabled = false;
		// btn.addEventListener("click", onActionsClick);

		form.addEventListener("submit", function (evt) {
			evt.preventDefault();
			onActionsClick();
		});
	});
}




if (navigator.vibrate) { 
	//navigator.vibrate(1000); 
	inputs = document.querySelector("#subscriberEmail"); 
	inputs.addEventListener('invalid', function(e) { 
		console.log('vibrate'); 
		window.navigator.vibrate([100, 50, 100]); 
	},  false  ); 
}









/**** Test ****/


/*

function showNotification() {
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        var notification = registration.showNotification(
          "GDR Verderena Newsletter",
          {
            body: "Psst! Psst! \nNão percas as Novidades de GDR Verderena 🎯",
            lang: "pt-PT",
            vibrate: [
              100,
              200,
              100,
              200,
              100,
              200,
              100,
              200,
              100,
              100,
              100,
              100,
              100,
              200,
              100,
              200,
              100,
              200,
              100,
              200,
              100,
              100,
              100,
              100,
              100,
              200,
              100,
              200,
              100,
              200,
              100,
              200,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              50,
              50,
              100,
              800
            ],
            tag: "Newsletter",
            renotify: true,
            icon:
              "https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png",
            data: {
              createdAt: new Date(Date.now()).toString(),
              message: "Hello, World!"
            },
            dir: "auto",
            requireInteraction: true,
            badge:
              "https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png",
            actions: [
              {
                action: "coffee-action",
                title: "Website",
                icon:
                  "https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png"
              },
              {
                action: "doughnut-action",
                title: "Facebook",
                icon:
                  "https://raw.githubusercontent.com/GDR-Verderena/gdr-verderena.github.io/master/assets/img/badge-128x128.png"
              }
            ]
          }
        );
      });
    }
  });
}

if ("actions" in Notification.prototype) {
  console.log("👌");
} else {
  // Action buttons are NOT supported.
  console.log("👎");
}


//Teste










const status =  navigator.permissions.query({
  name: 'periodic-background-sync',
});
if (status.state === 'granted') {
  // Periodic background sync can be used.
	console.log('Periodic background sync can be used.');	
} else {
  // Periodic background sync cannot be used.
	console.log('Periodic background sync cannot be used.');	
}




const registration =  navigator.serviceWorker.ready;
if ('periodicSync' in registration) {
  try {
     registration.periodicSync.register('content-sync', {
      // An interval of one day.
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch (error) {
    // Periodic background sync cannot be used.
	  console.log('Periodic background sync cannot be used.');
  }
}







*/
















!(function ($) {
  "use strict";

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel
    .find(".carousel-inner")
    .children(".carousel-item")
    .each(function (index) {
      index === 0
        ? heroCarouselIndicators.append(
            "<li data-target='#heroCarousel' data-slide-to='" +
              index +
              "' class='active'></li>"
          )
        : heroCarouselIndicators.append(
            "<li data-target='#heroCarousel' data-slide-to='" +
              index +
              "'></li>"
          );

      $(this).css(
        "background-image",
        "url('" +
          $(this).children(".carousel-background").children("img").attr("src") +
          "')"
      );
      $(this).children(".carousel-background").remove();
    });

  heroCarousel.on("slid.bs.carousel", function (e) {
    $(this).find("h2").addClass("animate__animated animate__fadeInDown");
    $(this)
      .find("p, .btn-get-started")
      .addClass("animate__animated animate__fadeInUp");
  });
})(jQuery);

//$(img).attr(draggable: false);

if ("storage" in navigator && "estimate" in navigator.storage) {
  navigator.storage.estimate().then(({ usage, quota }) => {
    console.log(`Using ${usage} out of ${quota} bytes.`);
  });
}

$(function () {
  $(".post").slice(0, 5).show(); // select the first 5
  $("#load").click(function (e) {
    // click event for load more
    e.preventDefault();
    $(".post:hidden").slice(0, 5).show(); // select next 5 hidden posts and show them
    if ($(".post:hidden").length == 0) {
      // check if any hidden ppost still exist

      $("#load").hide(); // hide the button

      // alert("No more divs"); // alert if there are none left
    }
  });
});

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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
  img.onload = function () {
    callback(true);
  };
  img.onerror = function () {
    callback(false);
  };
  img.src = url;
};

imageValidate = function (url) {
  imageExists(url, function (value) {
    //Show the result
    console.log(value);
    return value;
  });
};

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


