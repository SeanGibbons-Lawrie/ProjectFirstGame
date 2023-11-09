class Hud {
  constructor(container, uiStyleName){
    this.container = container
    this.uiStyleName = uiStyleName
  }
  
  createElement(){
  this.element = document.createElement('div')
  this.element.classList.add(uiStyleName)
  }

  init(container){
    this.createElement()
    container.appendChild(this.element)
  }
}
