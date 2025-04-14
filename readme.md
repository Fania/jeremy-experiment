
https://tympanus.net/codrops/2019/01/15/svg-filters-101/

<filter x="-10%" y="-10%" width="120%" height="120%" 
        filterUnits="objectBoundingBox">
    <!-- filter operations here -->
</filter>


<feOffset in="SHADOW" dx="20" dy="20" result="DROPSHADOW"></feOffset>





Styles to make fullscreen coordinates work:
```
body {
  margin: 0;
  background: beige;
}

main {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-height: 100vh;
  object-fit: contain;
  aspect-ratio: 409/450;
}

svg {
  border: 1px solid black;
  position: absolute;
  top: 0; left: 0;
}
```



Styles for fullscreen svg
```
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: beige;
  height: 100vh;
}

main {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-height: 100vh;
  object-fit: contain;
  aspect-ratio: 409/450;
}

svg {
 /* 1227 × 1350 */
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  object-fit: contain;
  aspect-ratio: 409/450;
  border: 1px solid black;
  position: absolute;
  top: 0; left: 0;
}
```