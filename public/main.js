var input = QueryString.radius || 50 // Tweak a couple points

var points = [
  [480, 200],
  [580, input * 5],
  [680, 100],
  [780, 300],
  [180, 300],
  [280, 100],
  [380, input * 5]
]

var newPoints = points.map(function(coords) {
  return coords.map(function(point) {
    return point * 0.5
  })
})
console.log(newPoints);

var line =
  d3.svg.line()
    .tension(0) // Catmull–Rom
    .interpolate("cardinal-closed")

var svg =
  d3.select("body").append("svg")
    .datum(newPoints)
    .attr("width", 480)
    .attr("height", 800)

svg.append("path")
   .attr("d", line)

svg.append("path")
   .attr("d", line)
