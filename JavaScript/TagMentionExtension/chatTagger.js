function tagUsersInChat() {
    const chatInput = document.querySelector('[aria-label="Message"]');  // Replace with the correct selector
    if (!chatInput) {
      console.error("Chat input not found");
      return;
    }
  
    const peopleToTag = ["Đăng Phong", "Jane Smith"]; // List of people to tag
    
    peopleToTag.forEach(person => {
      const personName = person.split(" ")[0];  // Extract the first name
      chatInput.value += "@" + personName + " ";  // Simulate typing '@' and the person's name
    });
  
    // Trigger an input event to simulate user typing
    const event = new Event('input', { bubbles: true });
    chatInput.dispatchEvent(event);
  }
    
  // This function is injected into the page
  tagUsersInChat();
  