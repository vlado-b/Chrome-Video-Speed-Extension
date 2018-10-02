document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('speedButton');
  checkPageButton.addEventListener('click', function() {
    
    var speedSelection = document.getElementById('speed');
    var speedVal = speedSelection.options[speedSelection.selectedIndex].value;
    
      
     chrome.tabs.executeScript(null,
      {code:"(document.getElementsByTagName('video')[0]).playbackRate = " + speedVal +  "; "});
      
      
      window.close();
    
  }, false);
}, false);

