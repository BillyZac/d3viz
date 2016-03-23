
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
      var watsonPersonality = data.traits
      console.log(watsonPersonality);

      // This part isn't working, so faking it with fake percentages.
      // var personality = {
      //   openness: getTraitPercentage(0, watsonPersonality),
      //   conscientiousness: getTraitPercentage(1, watsonPersonality),
      //   extraversion: getTraitPercentage(2, watsonPersonality),
      //   agreeableness: getTraitPercentage(3, watsonPersonality),
      //   neuroticism: getTraitPercentage(0, watsonPersonality),
      //   emotionality: getEmotionality(watsonPersonality) // Special case -- nested under Openness
      // }
      var personality = {
        openness: 20,
        conscientiousness: 20,
        extraversion: 20,
        agreeableness: 20,
        neuroticism: 20,
        emotionality: 20
      }
      window.location.search = getUrlParams(personality)
    } else {
      // We reached our target server, but it returned an error

    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
}
