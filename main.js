const customEmitter = require('./customEmitter');

// Function to simulate a user login
function simulateUserLogin(userId) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: USER_${userId} logged in`);
}

// Function to simulate a user logout
function simulateUserLogout(userId) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: USER_${userId} logged out`);
}

// Listen for "userLoggedIn" and "userLoggedOut" events
customEmitter.on('userLoggedIn', simulateUserLogin);
customEmitter.on('userLoggedOut', simulateUserLogout);

// Function to generate random user login/logout events
function generateRandomEvents() {
  const userId = Math.floor(Math.random() * 1000) + 1;
  const event = Math.random() < 0.5 ? 'userLoggedIn' : 'userLoggedOut';

  customEmitter.emit(event, userId);

  // Schedule the next event generation
  const delay = Math.random() * 1900 + 100; // Random delay between 0.1s and 2s
  setTimeout(generateRandomEvents, delay);
}

// Start generating random events
generateRandomEvents();
