class GameObject {
  constructor(config) {
    // this.id = null;
    // this.isMounted = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    // this.direction = config.direction || "down";
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || '/images/Green_Slime/Attack_1.png',
    });
  }

  mount(map){
    console.log('mounting')
    this.isMounted = true
  }

  //If we have a behavior, kick off after a short delay
  // setTimeout(() => {
  //   this.doBehaviorEvent(map)
  // }, 10)

  // update()

  // doBehaviorEvent(map){
  //   const eventHandler = new OverworldEvent ({ map, event: eventConfig})
  // }
  //Behaviour loop incomplete, Part 8 if needed to include
  
}
