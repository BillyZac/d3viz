var degreesInACircle = 360
var PI = Math.PI

function shape(personality, key) {
  var points = []
  var step = 15 // Degree to step forward for each point
  for (var thetaDegrees = 0; thetaDegrees <= 360; thetaDegrees += step) {
    var xParams = {
      t: degreesToRadians(thetaDegrees),
      radius: width/3,
      k: personality[key] / 10 + 1
    }
    var yParams = {
      t: degreesToRadians(thetaDegrees),
      radius: height/3,
      k: 2
    }
    var point = [xCoordinate(xParams), yCoordinate(yParams)]
    console.log(thetaDegrees, point);
    points.push(point)
  }
  return points
}

/////////

function xCoordinate(_) {
  return _.radius * Math.cos(_.k * _.t)
}

function yCoordinate(_) {
  return _.radius * Math.sin(_.k * _.t)
}

function degreesToRadians(valueInDegrees) {
  return valueInDegrees / degreesInACircle * 2 * PI
}

shape(null)
