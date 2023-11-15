class CombatLog {
  constructor({ onComplete }) {
    this.messages = []
    this.onComplete = onComplete
    this.element = null
    this.container = null;
  }

  createElement() {
    // Create the container for absolute positioning
    this.container = document.createElement('div');
    this.container.classList.add('CombatLogContainer');
    document.body.appendChild(this.container);
    // Create the CombatLog element
    this.element = document.createElement('div')
    this.element.classList.add('CombatLog')
    // Create a container for messages
    const messagesContainer = document.createElement('div')
    messagesContainer.classList.add('CombatLog_messages')
    this.element.appendChild(messagesContainer)
    // Create a "Clear" button
    const clearButton = document.createElement('button')
    clearButton.textContent = 'Clear'
    clearButton.addEventListener('click', () => this.clearLog())
    this.element.appendChild(clearButton)
    // Append the CombatLog element to the container
    this.container.appendChild(this.element);
  }

  addMessage(message) {
    // Add message to the messages array
    this.messages.push(message)
    // Update the messages container
    const messagesContainer = this.element.querySelector('.CombatLog_messages')
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messagesContainer.appendChild(messageElement)
  }

  clearLog() {
    // Clear messages array and update the messages container
    this.messages = []
    const messagesContainer = this.element.querySelector('.CombatLog_messages')
    messagesContainer.innerHTML = ''
  }

  init(container) {
    this.createElement()
    this.container.appendChild(this.element)
  }
  
}
//===========

//Code for testing

//===========
// const combatLog = new CombatLog({
//   onComplete: () => {
//     console.log('CombatLog completed!')
//   },
// })
// combatLog.createElement();
// combatLog.init()

// // Add messages to the combat log
// combatLog.addMessage('Player attacks the enemy!')
// combatLog.addMessage('Enemy takes 10 damage.')
// combatLog.addMessage('Player wins the battle!')

//===========

//Code for making it movable on mouseDrag

//===========
// let isDragging = false;
// let offsetX, offsetY;

// combatLog.container.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   offsetX = e.clientX - combatLog.container.getBoundingClientRect().left;
//   offsetY = e.clientY - combatLog.container.getBoundingClientRect().top;
// });

// document.addEventListener('mousemove', (e) => {
//   if (isDragging) {
//     combatLog.container.style.left = e.clientX - offsetX + 'px';
//     combatLog.container.style.top = e.clientY - offsetY + 'px';
//   }
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
// });
