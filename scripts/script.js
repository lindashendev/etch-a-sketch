// grid container
const container = document.querySelector(".container");

// create squares
function createSquareGrid(num) {
    for (let i = 0; i < Math.pow(num, 2); i++) {
      const squares = document.createElement("div");
      container.appendChild(squares);  
    }  

    const squares = document.querySelectorAll('.container div');

    function randomize() {
      return Math.floor(Math.random() * 255);
    }

    squares.forEach((item) => {
      item.style.width = `calc((600px / ${num}) - 1px)`;
      item.style.height = `calc((600px / ${num}) - 1px)`;
      item.addEventListener('mouseover', function() {
        const r = randomize();
        const g = randomize();
        const b = randomize();
    
        item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        item.style.opacity = `0.8`;
      });
    })
}

const clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener('click', function() {
    let userChoice;
    const squares = document.querySelectorAll('.container div');

    do {
      userChoice = prompt("How many squares per side? (maximum 100)");
    } while (isNaN(userChoice) || userChoice > 100);

    // remove previous squares
    squares.forEach((square) => {
      square.remove();
    })

    createSquareGrid(userChoice);
});

createSquareGrid(16);