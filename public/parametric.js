var circlePoints = []

function x(params) {
  if (params.xAxis === 'undefined')
    params.xAxis = 1
  return params.xAxis * Math.cos(params.t)
}

function y(params) {
  if (params.yAxis === 'undefined')
    params.yAxis = 1
  return params.yAxis * Math.sin(params.t)
}

function degreesToTheta(valueInDegrees) {
  return valueInDegrees / 360 * 2 * Math.PI
}

for (var i = 0; i < 360; i++ ) {
  var xParams = {
    t: degreesToTheta(i),
    xAxis: width
  }
  var yParams = {
    t: degreesToTheta(i),
    yAxis: height
  }
  var theta = degreesToTheta(i)
  var xPosition = x(xParams)
  var yPosition = y(yParams)

  if ((i % 45) === 0) {
    circlePoints.push([xPosition, yPosition])
  }
}

console.log(circlePoints);
