document.getElementById("startTagging").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: startTagging
      });
    });
  });
  
  function startTagging() {
    alert('Tagging people in Facebook chat...');
    // This is where the tagging logic will go
  }
  