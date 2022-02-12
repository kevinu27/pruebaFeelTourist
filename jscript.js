const Data = $.getJSON(
  "https://sensoralga.000webhostapp.com/datos.json",
  function (json) {
    console.log("json", json); // show the JSON file content into console
    return json;
  }
);
console.log("data", Data);

//console.log(data);

let i = 0;
let horizontal = 0;
let vertical = 0;
const newData = data.contenidos;
//console.log("newData", newData);
const keys = Object.values(newData);
//console.log("keys", keys);

document.querySelector("#circulo").addEventListener("click", circleClick);

function circleClick() {
  console.log("estoy en la funcion");

  const textCircle = document.querySelector("#texto");
  textCircle.textContent = keys[i].texto;

  document.getElementById("circulo").style.backgroundColor = keys[i].color;
  i = i + 1;
  console.log("i", i);
  if (i > 6) {
    i = 0;
  }
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    ///arriba
    vertical = vertical - 5;
    document.querySelector(".circle").style.top = `${vertical}px`;
  } else if (e.keyCode == "40") {
    vertical = vertical + 5;
    document.querySelector(".circle").style.top = `${vertical}px`;
  } else if (e.keyCode == "37") {
    ///derecha
    horizontal = horizontal - 5;
    document.querySelector(".circle").style.left = `${horizontal}px`;
  } else if (e.keyCode == "39") {
    horizontal = horizontal + 5;

    document.querySelector(".circle").style.left = `${horizontal}px`;
  }
}
