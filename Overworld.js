class Overworld {
  constructor(config) {
    this.element = config.element
    this.canvas = this.element.querySelector('.game-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.map = null //Maybe don't need this
  }

  init() {
    this.startGameLoop()

    const image = new Image()
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0)
    }
    image.src = 'images/Background1.png'

    const div = document.createElement('div')
    div.classList.add('player_stats')
    const playerStatsText = document.createElement('h1')
    playerStatsText.textContent = "Player Stats";

    // Append the div to the canvas container
    this.element.appendChild(div)
    div.appendChild(playerStatsText)
  }

  startGameLoop() {
    const step = () => {
      requestAnimationFrame(() => {
        step()
      })
    }
    step()
  }
}

// const div = document.createElement("div");
// div.style.width = "100px"; // Set the width of the div
// div.style.height = "100px"; // Set the height of the div
// div.style.backgroundColor = "blue"; // Set the background color
// div.style.position = "absolute"; // Set the position to absolute

// // Position the div on the canvas (adjust the coordinates as needed)
// div.style.left = "50px";
// div.style.top = "50px";

// Append the div to the canvas container
// this.element.appendChild(div);
