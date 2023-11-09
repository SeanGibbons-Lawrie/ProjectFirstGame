// let hp = 100; // Initialize your hit points (modify this value as needed)
// let speedStat = 1.0; // Initialize the speed stat (modify this value as needed)
// const attackDamage = 10; // Define your basic attack damage
// let isCombatPaused = false; // Flag to track if combat is paused
// let combatSpeed = 1; // Combat speed, 1x by default

// function performBasicAttack() {
//   if (hp > 0 && !isCombatPaused) {
//     // Perform the basic attack
//     hp -= attackDamage;
//     console.log('Performed basic attack. Current HP: ' + hp);
//   } else if (hp <= 0) {
//     // Stop the attack loop when HP reaches 0
//     console.log('HP has reached 0. Stopping attacks.');
//   }

//   // Calculate the attack interval based on the speed stat and combat speed
//   const attackIntervalDuration = 1000 / (speedStat * combatSpeed);
//   // Set up the next attack if combat is not paused
//   if (!isCombatPaused) {
//     setTimeout(performBasicAttack, attackIntervalDuration);
//   }
// }

// // Function to adjust combat speed
// function adjustCombatSpeed(newSpeed) {
//   combatSpeed = newSpeed;
//   console.log('Combat speed set to ' + newSpeed + 'x');
// }

// // Start the combat loop
// performBasicAttack();

// // Example usage:
// // To pause combat:
// // isCombatPaused = true;
// // To resume combat:
// // isCombatPaused = false;
// // To change combat speed:
// // adjustCombatSpeed(2); // Set combat speed to 2x
