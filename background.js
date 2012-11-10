// Copyright (c) 2012 Sean McMahan. All rights reserved.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
      null, {file: "spy-inator.js"});
});