var circle = d3.selectAll('circle')

console.log(QueryString.count);
console.log(QueryString.color);

var circleColor = QueryString.color || "steelblue"
var circleRadius = QueryString.radius || 30

circle.style("fill", circleColor);
circle.attr("r", circleRadius);
