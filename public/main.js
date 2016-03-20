var width = 800
var height = 800

var input = QueryString.radius || 50 // Tweak a couple points
var yFactor = QueryString.yFactor || 4 // Expect a val between 0 and 8

var hUnit = width / 8
var vUnit = height / 8

var points = [
  [hUnit * 4, vUnit * 5],
  [hUnit * 6, vUnit * 3],
  [hUnit * 2, vUnit * 3]
]
var points2 = [
  [hUnit * 4, vUnit * 2],
  [hUnit * 6, vUnit * yFactor],
  [hUnit * 2, vUnit * yFactor]
]

var line =
  d3.svg.line()
    // .tension(0) // Catmull–Rom
    .interpolate("cardinal-closed")

var svg =
  d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

appendPoints(points)
appendPoints(points2)

function appendPoints(points) {
  svg.append("g")
    .datum(points)
    .append("path")
    .attr("d", line)
}
