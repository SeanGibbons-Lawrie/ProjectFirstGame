class Overworld {
  constructor(config) {
    this.element = config.element
    this.canvas = this.element.querySelector('.game-canvas')
    this.ctx = this.canvas.getContext('2d')
    // this.map = null //Maybe don't need this
  }



  init() {
    
    let str = 1;
    let time = 3;
    this.startGameLoop()

    this.player_stats_title = new Hud(this.element, 'player_stats_title')
    console.log(this.player_stats_title)
    this.player_stats_title.init(this.element)

    this.player_stats = new Hud(this.element, 'player_stats')
    console.log(this.player_stats)
    this.player_stats.init(this.element)
    this.player_stats.element.innerHTML = `<p>Str: ${str}<br>
    Time: ${time}</p>`

    this.choices = new Hud(this.element, 'choices_container')
    console.log(this.choices)
    this.choices.init(this.element)

    this.first_choice = new Hud(this.choices.element, 'first_choice')
    console.log(this.first_choice)
    this.first_choice.init(this.choices.element)
    this.first_choice.element.innerHTML = `<h1> Train </h1>`

    this.second_choice = new Hud(this.choices.element, 'second_choice')
    console.log(this.second_choice)
    this.second_choice.init(this.choices.element)

    this.third_choice = new Hud(this.choices.element, 'third_choice')
    console.log(this.third_choice)
    this.third_choice.init(this.choices.element)

    const image = new Image()
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0)
    }
    image.src = 'images/seamlessdarkbg.png'
  }

  startGameLoop() {
    const step = () => {
      console.log("steppings")
      requestAnimationFrame(() => {
        step()
      })
    }
    step()
  }
}
