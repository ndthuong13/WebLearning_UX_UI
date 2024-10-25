document.addEventListener('DOMContentLoaded', function () {
    // Khi nhấn nút, thực hiện chức năng lấy nội dung văn bản
    document.getElementById("copyTextButton").addEventListener("click", () => {
      // Lấy tab hiện tại
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0].id;
        
        // Thực hiện hàm lấy nội dung văn bản trên tab hiện tại
        chrome.scripting.executeScript({
          target: { tabId: currentTab },
          function: extractTextContent
        }, (result) => {
          if (result && result[0] && result[0].result) {
            const text = result[0].result;
            document.getElementById("copiedText").value = text; // Hiển thị trong textarea
            copyToClipboard(text); // Sao chép vào clipboard
          }
        });
      });
    });
  });
  
  // Hàm lấy văn bản từ trang web, bỏ qua hình ảnh
  function extractTextContent() {
    return Array.from(document.body.querySelectorAll("*:not(img)"))
      .map(el => el.innerText.trim())
      .filter(text => text.length > 0)
      .join("\n");
  }
  
  // Hàm sao chép văn bản vào clipboard
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => alert("Text copied to clipboard!"))
      .catch(err => console.error("Failed to copy text:", err));
  }
  