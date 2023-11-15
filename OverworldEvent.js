class OverworldEvent {
  constructor({map, event}){
    this.map = map,
    this.event = event
  }

  changeMap(resolve) {
    this.map.overworld.startMap(window.OverworldMaps[this.event.map])
    resolve()
  }

  textMessage(resolve){
    const message = new TextMessage({
      text: this.event.text,
      onComplete: () => resolve()
    })
    message.init( document.querySelector('.game-container'))
  }

  battle(resolve){
    const battle = new Battle({
      onComplete: () => {
        resolve();
      }
    })
    battle.init(document.querySelector(".game-container"))
  }

  init() {
    return new Promise(resolve => {
      this[this.event.type(resolve)]//Could be done in a OOP way
    })
  }
}
