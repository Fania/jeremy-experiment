// This only works if the svg and img are displayed 
// at native width and height!

const svg_elem = document.getElementById('jeremy_svg');

const jeremy_coords_g = document.createElementNS("http://www.w3.org/2000/svg", "g");
// hide by default
jeremy_coords_g.setAttribute("class", "coordinates hide");

const jeremy_vertical_g = document.createElementNS("http://www.w3.org/2000/svg", "g");
jeremy_vertical_g.setAttribute("class", "vertical");
const jeremy_horizontal_g = document.createElementNS("http://www.w3.org/2000/svg", "g");
jeremy_horizontal_g.setAttribute("class", "horizontal");

jeremy_coords_g.appendChild(jeremy_vertical_g);
jeremy_coords_g.appendChild(jeremy_horizontal_g);
svg_elem.appendChild(jeremy_coords_g);

// const svgWidth = svg_elem.width.baseVal.value;
// const svgHeight = svg_elem.height.baseVal.value;
// console.dir(svg_elem);
const svgWidth = svg_elem.clientWidth;
const svgHeight = svg_elem.clientHeight;
// console.log(svgWidth,svgHeight);


// create vertical lines
for(let i=0; i < svgWidth; i+=50) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", i);
  line.setAttribute("y1", 0);
  line.setAttribute("x2", i);
  line.setAttribute("y2", svgHeight);
  line.setAttribute("stroke", "#eeeeee");
  jeremy_vertical_g.appendChild(line);
}

// create horizontal lines
for(let i=0; i < svgHeight; i+=50) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", 0);
  line.setAttribute("y1", i);
  line.setAttribute("x2", svgWidth);
  line.setAttribute("y2", i);
  line.setAttribute("stroke", "#eeeeee");
  jeremy_horizontal_g.appendChild(line);
}

// create vertical text
for(let i=0; i < svgWidth; i+=100) {
  let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", i+5);
  text2.setAttribute("x", i+5);
  text3.setAttribute("x", i+5);
  text.setAttribute("y", 15);
  text2.setAttribute("y", svgHeight-15);
  text3.setAttribute("y", svgHeight/2);
  text.setAttribute("stroke", "#eeeeee");
  text2.setAttribute("stroke", "#eeeeee");
  text3.setAttribute("stroke", "#eeeeee");
  text.textContent = i;
  text2.textContent = i;
  text3.textContent = i;
  jeremy_vertical_g.appendChild(text);
  jeremy_vertical_g.appendChild(text2);
  jeremy_vertical_g.appendChild(text3);
}

// create horizontal text
for(let i=0; i < svgWidth; i+=100) {
  let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", 5);
  text2.setAttribute("x", svgWidth/2+15);
  text3.setAttribute("x", svgWidth-35);
  text.setAttribute("y", i);
  text2.setAttribute("y", i);
  text3.setAttribute("y", i);
  text.setAttribute("stroke", "#eeeeee");
  text2.setAttribute("stroke", "#eeeeee");
  text3.setAttribute("stroke", "#eeeeee");
  text.textContent = i;
  text2.textContent = i;
  text3.textContent = i;
  jeremy_horizontal_g.appendChild(text);
  jeremy_horizontal_g.appendChild(text2);
  jeremy_horizontal_g.appendChild(text3);
}

const coordinates = document.querySelectorAll('.coordinates');
// console.log(coordinates);


document.addEventListener("keydown", event => {
  if (event.key === "c") {
    // console.log('coordinates disabled');
    coordinates.forEach(c => {
      c.classList.toggle('hide');
    });
  }
});