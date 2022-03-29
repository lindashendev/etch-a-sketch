// Create a webpage with a 16x16 grid of square divs.
const container = document.querySelector(".container");

for (let i = 0; i < Math.pow(16, 2); i++) {
  const squares = document.createElement("div");
  container.appendChild(squares);
}

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them
const squares = document.querySelectorAll('.container div');
squares.forEach((square) => {
  square.style.width = `calc((600px / 16) - 1px)`;
  square.style.height = `calc((600px / 16) - 1px)`;
  square.addEventListener('mouseover', function() {
    square.style.backgroundColor = "grey";
  })
})

// Add a button which will clear the current grid
  // send a popup asking for the number of squares per side for the new grid
const button = document.querySelector("#clearBtn");

button.addEventListener('click', function() {
  const squares = document.querySelectorAll('.container div');
  let userInput = prompt("How many squares per side? (maximum 100)");

  while (userInput > 100) {
    userInput = prompt("How many squares per side? (maximum 100)");
  }
  // remove squares
  squares.forEach((square) => {
    square.remove();
  })

  // create new grid
  for (let i = 0; i < Math.pow(userInput, 2); i++) {
    const square = document.createElement("div");
    square.style.width = `calc((600px / ${userInput}) - 1px)`;
    square.style.height = `calc((600px / ${userInput}) - 1px)`;

    square.addEventListener('mouseover', function(event) {
      function randomizer() {
        return Math.floor(Math.random() * 255);
      }
      const r = randomizer();
      const g = randomizer();
      const b = randomizer();
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      square.style.opacity = `0.8`;
      ;
    })
    container.appendChild(square);
  }
})