function getTraitPercentage(index, personality) {
  var traitPercentage = 0 // Default value
  var value = Math.trunc(parseFloat(personality.traits[index].percentage) * 100)
  if (value >= 0 || value <= 100) {
    traitPercentage = value
  }
  return traitPercentage
}

function getUrlParams(personality) {
  var urlParams =
  [
    '?',
    'openness=',
    personality.openness,
    '&',
    'conscientiousness=',
    personality.conscientiousness,
    '&',
    'extraversion=',
    personality.extraversion,
    '&',
    'agreeableness=',
    personality.agreeableness,
    '&',
    'neuroticism=',
    personality.neuroticism,
    '&',
    'emotionality=',
    personality.emotionality
  ].join('')
  return urlParams
}
