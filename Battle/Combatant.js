class Combatant {
  constructor(config, battle) {
    Object.keys(config).forEach((key) => {
      this[key] = config[key]
    })
    this.battle = battle
  }

  createElement() {
    this.hudElement = document.createElement('div')
    this.hudElement.classList.add('Combatant')
    this.hudElement.setAttribute('data-combatant', this.id)
    this.hudElement.setAttribute('data-team', this.team)
    this.hudElement.innerHTML = `
      <p class="Combatant_name">${this.name}</p>
      <p class="Combatant_level"></p>
      <div class="Combatant_character_crop">
        <img class="Combatant_character" alt="${this.name}" src="${this.src}" />
      </div>
      <svg viewBox="0 0 26 3" class="Combatant_life-container">
        <rect x=0 y=0 width="0%" height=1 fill="#82ff71" />
        <rect x=0 y=1 width="0%" height=2 fill="#3ef126" />
      </svg>
      <svg viewBox="0 0 26 2" class="Combatant_xp-container">
        <rect x=0 y=0 width="0%" height=1 fill="#ffd76a" />
        <rect x=0 y=1 width="0%" height=1 fill="#ffc934" />
      </svg>
      <p class="Combatant_status"></p>
    `
  }

  update(changes = {}) {
    //Update anything incoming
    Object.keys(changes).forEach((key) => {
      this[key] = changes[key]
    })
    this.hudElement.querySelector('.Combatant_level').innerText = this.level
  }

  init(continer) {
    this.createElement()
    container.appendChild(this.hudElement)
    this.update()
  }
}
