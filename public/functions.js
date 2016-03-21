/* Implementation */

function initializePoints() {
  points = [
    [2, 4],
    [2, 6],
    [4, 1],
    [6, 6],
    [6, 4]
  ]
  return points
}

function scalePoints(points, factor) {
  return points.map(function(point) {
    return point.map(function(coord) {
      return coord * factor
    })
  })
}

// Take a 2D points array
// Return a 2D array with the middle point based on "amount"
function updatePoints(options) {
  var points = options.points
  var pointIndex = options.pointIndex
  var amount = options.amount
  var delta = (amount - 50) / 50
  points[pointIndex][1] = points[pointIndex][1] + delta
  return points
}

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
