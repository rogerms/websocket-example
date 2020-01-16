//@ts-check
 
var button = document.querySelector("button");
var output = document.querySelector("#output");
var textarea = document.querySelector("textarea");

button.addEventListener("click", onClickButton);

// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080/', 'echo-protocol');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

function sendMessage(message) {
  writeToScreen("SENT: " + message);
  socket.send(message);
}

function writeToScreen(message) {
  output.insertAdjacentHTML("afterbegin", "<p>" + message + "</p>");
}
 
function onClickButton() {
  var text = textarea.value;
 
  text && sendMessage(text);
  textarea.value = "";
  textarea.focus();
}