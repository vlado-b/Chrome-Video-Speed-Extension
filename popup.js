document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('speedButton');
  checkPageButton.addEventListener('click', function() {
    var speedSelection = document.getElementById('speed');
    var speedVal = speedSelection.options[speedSelection.selectedIndex].value;
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: (speedVal) => {
          const video = document.getElementsByTagName('video')[0];
          if (video) {
            video.playbackRate = parseFloat(speedVal);
          }
        },
        args: [speedVal]
      });
      
      window.close();
    });
  }, false);
}, false);