var width = 600
var height = 600

var personality = {
  openness: QueryString.openness || 0,
  conscientiousness: QueryString.conscientiousness || 0,
  extraversion: QueryString.extraversion || 0,
  agreeableness: QueryString.agreeableness || 0,
  neuroticism: QueryString.neuroticism || 0,
  emotionality: QueryString.emotionality || 0
}

var hUnit = width / 8
var vUnit = height / 8
var baseHue = getBaseHue()

/* Define shapes */
// The new way
var shapeOpenness = updatePoints({
  points: initializePoints(),
  pointIndex: 2, // Center point
  amount: personality.openness
})
var scaledShapeOpenness = scalePoints(shapeOpenness, width/8)

var shapeConscientiousness = updatePoints({
  points: initializePoints(),
  pointIndex: 2, // Center point
  amount: personality.conscientiousness
})
var scaledShapeConscientiousness = scalePoints(shapeConscientiousness, width/8)

var shapeExtraversion = updatePoints({
  points: initializePoints(),
  pointIndex: 2, // Center point
  amount: personality.extraversion
})
var scaledShapeExtraversion = scalePoints(shapeExtraversion, width/8)

var shapeAgreeableness = updatePoints({
  points: initializePoints(),
  pointIndex: 2, // Center point
  amount: personality.agreeableness
})
var scaledShapeAgreeableness = scalePoints(shapeAgreeableness, width/8)

var shapeNeuroticism = updatePoints({
  points: initializePoints(),
  pointIndex: 2, // Center point
  amount: personality.neuroticism
})
var scaledShapeNeuroticism = scalePoints(shapeNeuroticism, width/8)

var shapeEmotionality = updatePoints({
  points: initializePoints(),
  pointIndex: 2, // Center point
  amount: personality.emotionality
})
var scaledShapeEmotionality = scalePoints(shapeEmotionality, width/8)

/* Define line function and setup svg */
var line =
  d3.svg.line()
    // .tension(0) // Catmull–Rom
    // .interpolate("cardinal-closed")

var svg =
  d3.select(".viz").append("svg")
    .attr("width", width)
    .attr("height", height)


/* Execution */
appendPoints(scaledShapeOpenness, color5)
appendPoints(scaledShapeConscientiousness, color5)
appendPoints(scaledShapeExtraversion, color5)
appendPoints(scaledShapeAgreeableness, color5)
appendPoints(scaledShapeNeuroticism, color5)
appendPoints(scaledShapeEmotionality, color5)
