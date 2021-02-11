var dotIndex = 0;
var graphviz = d3
  .select("#graph")
  .graphviz()
  .transition(function () {
    return d3.transition("main").ease(d3.easeLinear).delay(700).duration(2000);
  })
  .on("initEnd", renderFrameOne);

if (window.screen.width < 700) {
  graphviz.scale(0.75);
}

graphviz.zoom(false);

function renderFrameOne() {
  var dotLines = dots[dotIndex];
  var dot = dotLines.join("");
  dotIndex += 1;
  graphviz.zoom(false);
  graphviz.renderDot(dot);
}

function render() {
  var dotLines = dots[dotIndex];
  var dot = dotLines.join("");
  graphviz.renderDot(dot).on("end", function () {
    if (dotIndex === dots.length) {
      dotIndex = 0;
      return;
    }
    render();
    dotIndex += 1;
  });
}

var start = document.getElementById("start");
start.style.cursor = "pointer";
start.onclick = render;

var dots = [
  [
    `graph {
        node [style="filled"];
        10 [fillcolor="red", xlabel="Start at the root node..."];
        10 -- 8 ;
        10 -- 11;
        8 -- 7;
        8 -- 9;
        null11 [style=invis];
        11 -- null11 [style=invis];
        11 -- 13;
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        8 [fillcolor="red", ];
        10 -- 8 ;
        10 -- 11;
        8 -- 7;
        8 -- 9;
        null11 [style=invis];
        11 -- null11 [style=invis];
        11 -- 13;
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        8 [fillcolor="red", ];
        10 -- 8 ;
        10 -- 11;
        8 -- 9;
        null11 [style=invis];
        11 -- null11 [style=invis];
        11 -- 13;
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        10 -- 8 ;
        10 -- 11;
        9 [fillcolor="red", ];
        8 -- 9;
        null11 [style=invis];
        11 -- null11 [style=invis];
        11 -- 13;
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        10 -- 8 ;
        10 -- 11;
        8 [fillcolor="red", ];
        8 -- 9;
        null11 [style=invis];
        11 -- null11 [style=invis];
        11 -- 13;
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        10 -- 8 ;
        10 -- 11;
        10 [fillcolor="red", ];
        8 -- 9;
        null11 [style=invis];
        11 -- null11 [style=invis];
        11 -- 13;
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        10 -- 8 ;
        10 -- 11;
        8 -- 9;
        null11 [style=invis];
        11 [fillcolor="red", ];
        11 -- null11 [style=invis];
        11 -- 13;
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        10 -- 8 ;
        10 -- 11;
        8 -- 9;
        null11 [style=invis];
        11 -- null11 [style=invis];
        13 [fillcolor="red", ];
        11 -- 13;
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        10 -- 8 ;
        10 -- 11;
        8 -- 9;
        null11 [style=invis];
        11 [fillcolor="red", ];
        11 -- null11 [style=invis];
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        10 [fillcolor="red", ];
        10 -- 8 ;
        10 -- 11;
        8 -- 9;
        null11 [style=invis];
        11 -- null11 [style=invis];
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        10 [fillcolor="red", xlabel="And we are done!" ];
        10 -- 8 ;
        10 -- 11;
        8 -- 9;
        null11 [style=invis];
        11 -- null11 [style=invis];
    }`,
  ],
  [
    `graph {
        node [style="filled"];
        10 [fillcolor="red", xlabel="And we are done!"];
        10 -- 8 ;
        10 -- 11;
        8 -- 9;
        null11 [style=invis];
        11 -- null11 [style=invis];
    }`,
  ],
];
