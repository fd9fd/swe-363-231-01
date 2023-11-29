const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const predefinedResponses = {
  'hello': 'Hello! How can I help you?',
  'how are you': 'I am so saad because of the ending of AOT.',
  'who are you': 'I am a simple chatbot that probably will conquer the world',
  'how old are you': 'I am older enough to say that I have seen the world ENDING!!. Most likely you will not understand this KID!!',
  'exit': 'Goodbye buddy and do not forget to see AOT last episode!!!',
};

function chat() {
  rl.question('You: ', (userInput) => {
    const input = userInput.toLowerCase();
    if (input in predefinedResponses) {
      const response = predefinedResponses[input];
      console.log(`Chatbot: ${response}`);
      if (input === 'exit' || input === 'quit') {
        rl.close();
      } else {
        chat(); // Continue the conversation
      }
    } else {
      console.log("Chatbot: I'm not sure how to respond to that.");
      chat(); // Continue the conversation
    }
  });
}

console.log('Chatbot: Hello! How can I assist you today?');

chat(); // Start the conversation

rl.on('close', () => {
  console.log('Chatbot has been terminated.');
  process.exit(0);
});
