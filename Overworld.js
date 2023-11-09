class Overworld {
  constructor(config) {
    this.element = config.element
    this.canvas = this.element.querySelector('.game-canvas')
    this.ctx = this.canvas.getContext('2d')
    // this.map = null //Maybe don't need this
  }

  init() {
    
    this.startGameLoop()
    this.hud = new Hud(this.element, 'player_stats')
    this.hud.init(this.element)

    const image = new Image()
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0)
    }
    image.src = 'images/seamlessdarkbg.png'



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

