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
  points: initializePoints('A'),
  pointsIndicies: [], // Two outer points
  amount: personality.openness
})
var scaledShapeOpenness = scalePoints(shapeOpenness, width/8)

var shapeConscientiousness = updatePoints({
  points: initializePoints(),
  pointsIndicies: [1, 3], // Second from out points
  amount: personality.conscientiousness
})
var scaledShapeConscientiousness = scalePoints(shapeConscientiousness, width/8)

var shapeExtraversion = updatePoints({
  points: initializePoints(),
  pointsIndicies: [2], // Center point
  amount: personality.extraversion
})
var scaledShapeExtraversion = scalePoints(shapeExtraversion, width/8)

var shapeAgreeableness = updatePoints({
  points: initializePoints(),
  pointsIndicies: [2], // Center point
  amount: personality.agreeableness
})
var scaledShapeAgreeableness = scalePoints(shapeAgreeableness, width/8)

var shapeNeuroticism = updatePoints({
  points: initializePoints(),
  pointsIndicies: [2], // Center point
  amount: personality.neuroticism
})
var scaledShapeNeuroticism = scalePoints(shapeNeuroticism, width/8)

var shapeEmotionality = updatePoints({
  points: initializePoints(),
  pointsIndicies: [2], // Center point
  amount: personality.emotionality
})
var scaledShapeEmotionality = scalePoints(shapeEmotionality, width/8)


//////////
var shape1 = shape(personality, 'emotionality')
var shape2 = shape(personality, 'extraversion')
var shape3 = shape(personality, 'conscientiousness')


/* Define line function and setup svg */
var line =
  d3.svg.line()
    // .tension(0) // Catmull–Rom
    // .interpolate("cardinal-closed")

var svg =
  d3.select(".viz").append("svg")
    .attr("width", width)
    .attr("height", height)

svg.append("g")
  .datum(shape1)
  .append("path")
  .attr("d", line)
  .attr("transform", "translate(300, 300)")
  .style({
    "fill": 'aqua',
    'opacity': 0.5
  })

svg.append("g")
  .datum(shape2)
  .append("path")
  .attr("d", line)
  .attr("transform", "translate(300, 300)")
  .style({
    "fill": 'no-fill',
    'stroke': 'tomato',
    'stroke-width': '3px',
    'opacity': 0.5
  })

svg.append("g")
  .datum(shape3)
  .append("path")
  .attr("d", line)
  .attr("transform", "translate(300, 300)")
  .style({
    "fill": 'tomato',
    'opacity': 0.5
  })
