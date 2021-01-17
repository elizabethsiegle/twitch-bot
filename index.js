const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: process.env.MY_TWITCH_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN
  },
  channels: ['chessbrah']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages.
  if(self) return;

  if(message.toLowerCase() === '!hello') { 
    setTimeout(function () { //delay to avoid error saying messaging too fast
        client.say(channel, `Great channel`);
    }, 5000);
    
  }
});