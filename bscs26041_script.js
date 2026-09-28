const chatLog = document.getElementById('chatLog');
const userInput = document.getElementById('userInput');

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  if (sender === 'user') {
    messageDiv.classList.add('user-message');
  } else if (sender === 'bot'){
    messageDiv.classList.add('bot-message');
  }
  messageDiv.textContent = text;
  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}
function handleUserMessage() {
  const userText = userInput.value.trim();
  if (userText === "") {
    return; 
  }
  addMessage(userText, 'user');
  userInput.value = "";
  const botReply = "You said " + userText;
  addMessage(botReply, 'bot');
}
