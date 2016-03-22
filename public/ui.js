
var usernameInput = document.getElementById("username")

usernameInput.addEventListener('blur', function() {
  console.log(usernameInput.value)

  // Update label
  var username = usernameInput.value
  var usernameDisplayed = document.getElementById("usernameDisplayed")
  usernameDisplayed.textContent = "@" + username

  // Get personality profile
  get('https://personality.herokuapp.com/:' + username)
})


function get(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      console.log(data);
    } else {
      // We reached our target server, but it returned an error

    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
}
