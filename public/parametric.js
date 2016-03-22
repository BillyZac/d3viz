var circlePoints = []

function x(t) {
  return Math.cos(t)
}
function y(t) {
  return Math.sin(t)
}

function degreesToTheta(valueInDegrees) {
  return valueInDegrees / 360 * 2 * Math.PI
}

for (var i = 0; i < 360; i++ ) {
  var theta = degreesToTheta(i)
  var xPosition = x(theta) * width
  var yPosition = y(theta) * height

  if ((i % 45) === 0) {
    circlePoints.push([xPosition, yPosition])
  }
}

console.log(circlePoints);
