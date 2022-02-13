function getData() {
  return $.getJSON("https://sensoralga.000webhostapp.com/datos.json").then(
    function (json) {
      return json;
    }
  );
}
getData().then(function (returndata) {
  const data = returndata.contenidos;
  const dataValues = Object.values(data);
  document
    .querySelector("#circleId")
    .addEventListener("click", () => circleClick(dataValues));
});

let i = 0;
function circleClick(keys) {
  const textCircle = document.querySelector("#text");
  textCircle.textContent = keys[i].texto;

  document.getElementById("circleId").style.backgroundColor = keys[i].color;

  i += 1;
  i = i > 6 ? 0 : i;
}

let horizontal = 0;
let vertical = 0;
const arrows = {
  up: "38",
  down: "40",
  left: "37",
  right: "39",
};

document.addEventListener("keydown", pressedKeyControl);

function pressedKeyControl(e) {
  if (e.keyCode == arrows.up) {
    vertical = vertical - 5;
    document.querySelector(".circle").style.top = `${vertical}px`;
  } else if (e.keyCode == arrows.down) {
    vertical = vertical + 5;
    document.querySelector(".circle").style.top = `${vertical}px`;
  } else if (e.keyCode == arrows.left) {
    horizontal = horizontal - 5;
    document.querySelector(".circle").style.left = `${horizontal}px`;
  } else if (e.keyCode == arrows.right) {
    horizontal = horizontal + 5;
    document.querySelector(".circle").style.left = `${horizontal}px`;
  }
}
