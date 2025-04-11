const svg_elem = document.getElementById('jeremy_svg');
const img_elem = document.getElementById('jeremy_img');

// const svgWidth = svg_elem.width.baseVal.value;
// const svgHeight = svg_elem.height.baseVal.value;
// const svgWidth = svg_elem.clientWidth;
// const svgHeight = svg_elem.clientHeight;
// console.log(svgWidth,svgHeight);

svg_elem.addEventListener("click", async (ev) => {
  console.log(`(${ev.offsetX}, ${ev.offsetY})`);
});

// svg_elem.addEventListener("dblclick", async (ev) => {
//   if(img_elem.style.zIndex == 9) {
//     img_elem.style.zIndex = 0;
//   } else {
//     img_elem.style.zIndex = 9;
//   }
// });
