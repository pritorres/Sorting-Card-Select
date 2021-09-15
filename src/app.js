/* eslint-disable */
import "bootstrap";
import "./style.css";

window.cartas = [];
const myPinta = ["diamond", "heart", "club", "spade"];
const myNumeroCard = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
window.myFuncion = function() {
  window.cartas = [];
  const myInput = document.querySelector(".myInput");
  const cartasSort = document.querySelector(".cartasSort");
  let myCard = "";

  for (let index = 0; index < myInput.value; index++) {
    const pintaAleatoria = Math.floor(Math.random(0) * 4);
    const numeroAleatorio = Math.floor(Math.random(0) * 13);
    window.cartas.push({ pintaAleatoria, numeroAleatorio });
    myCard += `
      <div class="Cards">
        <div class="icono-top ${myPinta[pintaAleatoria]}"></div>
        <div class="numeroCard ">${myNumeroCard[numeroAleatorio]}</div>
        <div class="icono-bottom ${myPinta[pintaAleatoria]}"></div>
      </div>
    `;
  }

  cartasSort.innerHTML = myCard;
};

window.myFuncion2 = function() {
  let cartasOrdenadas = "";
  for (let index = 0; index < window.cartas.length; index++) {
    for (let j = 0; j < window.cartas.length - index - 1; j++) {
      if (
        window.cartas[j].numeroAleatorio > window.cartas[j + 1].numeroAleatorio
      ) {
        let aux = window.cartas[j];
        window.cartas[j] = window.cartas[j + 1];
        window.cartas[j + 1] = aux;
      }
    }
    cartasOrdenadas += `<div class="cartasSort"> <div><p>${index}</p></div>`;
    for (let y = 0; y < window.cartas.length; y++) {
      cartasOrdenadas += ` 
       
        <div class="Cards">
        <div class="icono-top ${
          myPinta[window.cartas[y].pintaAleatoria]
        }"></div>
        <div class="numeroCard ">${
          myNumeroCard[window.cartas[y].numeroAleatorio]
        }</div>
        <div class="icono-bottom ${
          myPinta[window.cartas[y].pintaAleatoria]
        }"></div>
        </div>
    `;
    }
    cartasOrdenadas += `</div>`;
  }
  const cartasSort2 = document.querySelector("#cartaSort2");
  cartasSort2.innerHTML = cartasOrdenadas;
};
