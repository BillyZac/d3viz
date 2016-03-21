var usernameInput = document.getElementById("username")

usernameInput.addEventListener('keyup', function() {
  console.log(usernameInput.value)
  var username = usernameInput.value
  var usernameDisplayed = document.getElementById("usernameDisplayed")
  usernameDisplayed.textContent = "@" + username
})
