var width = 800
var height = 800

var input = QueryString.radius || 50 // Tweak a couple points
var yFactor = QueryString.yFactor || 4 // Expect a val between 0 and 8

var hUnit = width / 8
var vUnit = height / 8
var baseHue = getBaseHue()
console.log(baseHue);

var points = [
  [hUnit * 4, vUnit * 5],
  [hUnit * 6, vUnit * 3],
  [hUnit * 2, vUnit * 3]
]
var color1 = [ 'hsl(', baseHue, ',50%, 50%)'].join('')

var points2 = [
  [hUnit * 4, vUnit * 2],
  [hUnit * 6, vUnit * yFactor],
  [hUnit * 2, vUnit * yFactor]
]
var color2 = [ 'hsl(', baseHue + 400, ',50%, 50%)'].join('')


var line =
  d3.svg.line()
    // .tension(0) // Catmull–Rom
    .interpolate("cardinal-closed")

var svg =
  d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

appendPoints(points, color1)
appendPoints(points2, color2)

function appendPoints(points, color) {
  color = color || 'aqua'
  svg.append("g")
    .datum(points)
    .append("path")
    .attr("d", line)
    .style({
      "fill": color,
      'opacity': 0.5
    })
}

function getBaseHue() {
  var baseHue = 0 // Default value
  var emotionality = QueryString.emotionality
  if (emotionality >= 0 && emotionality <= 100) {
    baseHue = emotionality * 3.6 // Scale for hsl hue, which is 0 - 360
    return baseHue
  }
  // Return default value if emotionality param is not valid
  return baseHue
}
