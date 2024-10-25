document.addEventListener('DOMContentLoaded', function () {
  const textArea = document.getElementById("savedText");
  const saveButton = document.getElementById("saveButton");
  const editButton = document.getElementById("editButton");
  const deleteButton = document.getElementById("deleteButton");

  // Khi mở popup, hiển thị văn bản đã lưu từ Chrome Storage
  chrome.storage.local.get("savedText", function (data) {
    if (data.savedText) {
      textArea.value = data.savedText;
    }
  });

  // Nút "Save" để lưu văn bản vào Chrome Storage
  saveButton.addEventListener("click", function () {
    const text = textArea.value;
    chrome.storage.local.set({ savedText: text }, function () {
      alert("Text saved!");
      textArea.setAttribute("readonly", true); // Đặt textarea ở chế độ chỉ đọc sau khi lưu
    });
  });

  // Nút "Edit" để cho phép chỉnh sửa văn bản
  editButton.addEventListener("click", function () {
    textArea.removeAttribute("readonly"); // Cho phép chỉnh sửa văn bản
  });

  // Nút "Delete" để xóa văn bản khỏi Chrome Storage
  deleteButton.addEventListener("click", function () {
    chrome.storage.local.remove("savedText", function () {
      textArea.value = ""; // Xóa văn bản khỏi textarea
      alert("Text deleted!");
    });
  });
});
