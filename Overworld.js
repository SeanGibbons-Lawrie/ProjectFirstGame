class Overworld {
  constructor(config) {
    this.element = config.element
    this.canvas = this.element.querySelector('.game-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.map = null //Maybe don't need this
  }

  startGameLoop() {
    const step = () => {
      //Clear off the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      //Draw Lower Layer
      this.map.drawLowerImage(this.ctx)
      //Draw Game Objects
      Object.values(this.map.gameObjects).sort((a,b) => {
        return a.y -b.y//This ensures that northern sprites are drawn before southern ones
      }).forEach(object => {
        object.sprite.draw(this.ctx)
      })
      //Draw Upper Layer
      this.map.drawUpperImage(this.ctx)

      console.log("stepping")
      requestAnimationFrame(() => {
        step()
      })
    }
    step()
  }

  startMap(mapConfig) {
    this.map = new OverworldMap(mapConfig)
    this.map.overworld = this
    this.map.mountObjects();
  }

  init() {
    
    this.startMap(window.OverworldMaps.DemoRoom)
    // this.map.mountObjects()
    this.startGameLoop()

    this.map.startCutscene([{
      type: "battle",
    }])
  }
}


    // let str = 1;
    // let time = 3;
    // this.player_stats_title = new Hud(this.element, 'player_stats_title')
    // console.log(this.player_stats_title)
    // this.player_stats_title.init(this.element)

    // this.player_stats = new Hud(this.element, 'player_stats')
    // console.log(this.player_stats)
    // this.player_stats.init(this.element)
    // this.player_stats.element.innerHTML = `<p>Str: ${str}<br>
    // Time: ${time}</p>`

    // this.choices = new Hud(this.element, 'choices_container')
    // console.log(this.choices)
    // this.choices.init(this.element)

    // this.first_choice = new Hud(this.choices.element, 'first_choice')
    // console.log(this.first_choice)
    // this.first_choice.init(this.choices.element)
    // this.first_choice.element.innerHTML = `<h1> Train </h1>`

    // this.second_choice = new Hud(this.choices.element, 'second_choice')
    // console.log(this.second_choice)
    // this.second_choice.init(this.choices.element)

    // this.third_choice = new Hud(this.choices.element, 'third_choice')
    // console.log(this.third_choice)
    // this.third_choice.init(this.choices.element)

    // const image = new Image()
    // image.onload = () => {
    //   this.ctx.drawImage(image, 0, 0)
    // }
    // image.src = '/images/seamlessdarkbg.png'

    // //Place some gameObjects

    // const hero = new GameObject({
    //   x: 650,
    //   y: 350,
    // })
    // setTimeout(() =>{
    //   hero.sprite.draw(this.ctx)
    // }, 1000)
    
 
