var width = 800
var height = 800

var personality = {
  openness: QueryString.openness || 0,
  conscientiousness: QueryString.conscientiousness || 0,
  extraversion: QueryString.extraversion || 0,
  agreeableness: QueryString.agreeableness || 0,
  neuroticism: QueryString.neuroticism || 0,
  emotionality: QueryString.emotionality || 0
}
console.log(personality);

var hUnit = width / 8
var vUnit = height / 8
var baseHue = getBaseHue()

/* Define shapes */
// The new way
var shape1 = updatePoints(initializePoints(), personality.emotionality)
var scaledShape1 = scalePoints(shape1, 100)
var shape2 = updatePoints(initializePoints(), personality.openness)
var scaledShape2 = scalePoints(shape2, 100)

// The old, more brute way
var points1 = [
  [hUnit * 4, vUnit * 5],
  [hUnit * 6, vUnit * 3],
  [hUnit * 2, vUnit * 3]
]
var color1 = [ 'hsl(', baseHue, ',50%, 50%)'].join('')

var points2 = [
  [hUnit * 4, vUnit * 4],
  [hUnit * 6, vUnit * 4],
  [hUnit * 2, vUnit * 4]
]
var color2 = [ 'hsl(', baseHue + 50, ',50%, 50%)'].join('')

var points3 = [
  [hUnit * 4, vUnit * 7],
  [hUnit * 6, vUnit * 3],
  [hUnit * 2, vUnit * 3]
]
var color3 = [ 'hsl(', baseHue + 100, ',50%, 50%)'].join('')

var points4 = [
  [hUnit * 3, vUnit * 4],
  [hUnit * 1, vUnit * 6],
  [hUnit * 3, vUnit * 7]
]
var color4 = [ 'hsl(', baseHue + 150, ',50%, 50%)'].join('')

var points5 = [
  [hUnit * 5, vUnit * 4],
  [hUnit * 7, vUnit * 6],
  [hUnit * 5, vUnit * 7]
]
var color5 = [ 'hsl(', baseHue + 150, ',50%, 50%)'].join('')

/* Define line function and setup svg */
var line =
  d3.svg.line()
    // .tension(0) // Catmull–Rom
    // .interpolate("cardinal-closed")

var svg =
  d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)


/* Execution */
appendPoints(points1, color1)
appendPoints(points2, color2)
appendPoints(points3, color3)
appendPoints(points4, color4)
appendPoints(points5, color5)
appendPoints(scaledShape1, color5)
appendPoints(scaledShape2, color2)
