const boxes = document.querySelector("[data-boxes]");
const resetGame = document.querySelector("[data-reset]");
const score = document.querySelector("[data-score]");

let width = 10;
let squares = [];
let bombAmount = 20;
let scoreValid = 0;

const bombArray = new Array(bombAmount).fill("bomb");
const validArray = new Array(width * width - bombAmount).fill("valid");
const gameArray = validArray.concat(bombArray);

const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

for (let i = 0; i < width * width; i++) {
     const box = document.createElement("div");
     box.setAttribute("data-index", i);

     box.addEventListener("click", () => {
          box.classList.add(shuffledArray[i]);
          if (box.classList.contains("bomb")) {
               console.log("you lose");
          } else {
               score.innerText = `score ${scoreValid++}`;
          }
     });
     boxes.appendChild(box);
     squares.push(box);
}

// for (let i = 0; i < squares.length; i++) {
//      let total;
//      const isLeftEdge = i % width === 0;
//      const isRightEdge = i % width === width - 1;
//      if (squares[i].classList.contains("valid")) {
//           if (
//                i > 0 &&
//                !isLeftEdge &&
//                squares[i - 1].classList.contains("bomb")
//           ) {
//                total++;
//           }
//           if (
//                i > 9 &&
//                !isRightEdge &&
//                squares[i + 1 - width].classList.contains("bomb")
//           ) {
//                total++;
//           }

//      }
// }

resetGame.addEventListener("click", () => {
     document.location.reload();
});
