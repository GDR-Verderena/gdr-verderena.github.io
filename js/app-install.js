"use strict";


  const butInstall = document.getElementById("butInstall");

  /**
   * Track successful app installs
   */
  window.addEventListener("appinstalled", (e) => {
    console.log(installed);
  });

  /**
   * Listen for 'beforeinstallprompt' event, and update the UI to indicate
   * app can be installed.
   */
  window.addEventListener("beforeinstallprompt", (e) => {
    // Don't show the mini-info bar
    e.preventDefault();

    // Log that install is available.

    // Save the deferred prompt
    deferredPrompt.installPrompt = e;

    // Show the install button
    butInstall.removeAttribute("disabled");
    butInstall.classList.remove("hidden");
  });

  // Handle the install button click
  butInstall.addEventListener("click", () => {
    butInstall.setAttribute("disabled", true);
    deferredPrompt.installPrompt.prompt();
    console.log("Install clicked");
  });

