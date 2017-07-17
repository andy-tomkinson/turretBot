'use strict';

// Include the serverless-slack bot framework
const slack = require('serverless-slack');
const turretSpeech = require('./turretSpeech.js');
const Content = require('./content.js');
const _ = require('lodash');


// The function that AWS Lambda will call
exports.handler = slack.handler.bind(slack);


// Slash Command handler
slack.on('/turret', (msg, bot) => {
  console.log(msg);
  let contentMaker = new Content();
  let messageText = contentMaker.getContent(msg);

  // ephemeral reply
  bot.reply(
      {
        text: messageText
      }
    ); 
});
