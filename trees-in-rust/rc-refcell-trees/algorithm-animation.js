var dotIndex = 0;
var graphviz = d3
  .select("#graph")
  .graphviz()
  .transition(function () {
    return d3.transition("main").ease(d3.easeLinear).delay(500).duration(1500);
  })
  .logEvents(true)
  .on("initEnd", render);

function render() {
  var dotLines = dots[dotIndex];
  var dot = dotLines.join("");
  graphviz.renderDot(dot).on("end", function () {
    dotIndex = (dotIndex + 1) % dots.length;
    render();
  });
}

var dots = [
  [
    "graph { 10 -- 8; 10 -- 11; 8 -- 7; 8 -- 9; null11 [style=invis]; 11 -- null11 [style=invis]; 11 -- 13; }",
  ],
  [
    'graph { 10 -- 8[fillcolor="#1f77b4"]; 10 -- 11; 8 -- 7; 8 -- 9; null11 [style=invis]; 11 -- null11 [style=invis]; }',
  ],
];
