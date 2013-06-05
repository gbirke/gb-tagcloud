requirejs.config({
	paths: {
		"d3": "../components/d3/d3.min",
		"d3.cloud": "../components/d3-cloud/d3.layout.cloud"
	},
    shim: {
        d3: {
            exports: 'd3'
        },
        'd3.cloud':['d3']
    }
});

require(["data", "d3", "d3.cloud"], function(data, d3){
  var wordData = data.getWords(),
  	  myFnt = "Tahoma";


  d3.layout.cloud().size([960, 600])
      .words(wordData)
      .rotate(function() { return Math.random() > .9 ? 90 : 0; })
      .font(myFnt)
      .fontWeight("bold")
      .fontSize(function(d) { return 10 + d.importance ; })
      .padding(10)
      .on("end", draw)
      .on("word", function(w){ 
      	w.placed = true;
      })
      .start();

  function draw(words) {
  	var categoryColors = {
		"language": "#2ca02c",
		"library": "#1f77b4",
		"software": "#ff7f0e"
	};
    d3.select("body").append("svg")
        .attr("width", 960)
        .attr("height", 600)
      .append("g")
        .attr("transform", "translate(480,300)")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", myFnt)
        .style("font-weight", "bold")
        .style("fill", function(d, i) { return categoryColors[d.category]; })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
    console.log("Placed ", words.length, " words");
  }
});