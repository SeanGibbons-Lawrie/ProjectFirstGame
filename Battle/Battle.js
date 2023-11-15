class Battle {
  constructor() {
    this.combatants = {
      "player": new Combatant({
        ...Enemies["s001"],
        team: "player",
        hp: 50,
        maxHp: 50,
        xp: 0,
        level: 1,
      }, this),
      "enemy1": new Combatant({
        ...Enemies["s001"],
        team: "enemy",
        hp: 50,
        maxHp: 50,
        xp: 0,
        level: 1,
      }, this)
    }
  }

  createElement() {
    this.element = document.createElement('div')
    this.element.classList.add('Battle')
    this.element.innerHTML = (`
      <div class = "Battle_hero">
        <img src="${'images/Green_Slime/Green_Slime_Atlas.png'}" alt="Hero" />
      </div>
      <div class = "Battle_enemy">
        <img src="${'images/Green_Slime/Idle.png'}" alt="Enemy" />
      </div>
    `)
  }

  init(container) {
    this.createElement()
    container.appendChild(this.element)

    Object.keys(this.combatants).forEach(key =>{
      let combatant = this.combatants[key]
      combatant.id = key
      combatant.init(this.element)
    })

  }
}