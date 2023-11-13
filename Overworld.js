class Overworld {
  constructor(config) {
    this.element = config.element
    this.canvas = this.element.querySelector('.game-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.map = null //Maybe don't need this
  }

  init() {
    let str = 1;
    this.startGameLoop()
    this.player_stats_title = new Hud(this.element, 'player_stats_title')
    console.log(this.player_stats_title)
    this.player_stats_title.init(this.element)

    this.player_stats = new Hud(this.element, 'player_stats')
    console.log(this.player_stats)
    this.player_stats.init(this.element)
    this.player_stats.element.textContent = `Str: ${str}`

    const image = new Image()
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0)
    }
    image.src = 'images/Background1.png'
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
