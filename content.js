'use strict';

//const turretSpeech = require('./turretSpeech.json');
const turretSpeech = require('./turretSpeech');

// load different speech categories
const other = require('./turretSpeech/other.json');
const testing = require('./turretSpeech/testing.json');
const greetings = require('./turretSpeech/greetings.json');
const farewell = require('./turretSpeech/farewell.json');
const pain = require('./turretSpeech/pain.json');

const _ = require('lodash');

const testingTriggers = ['test','testing'];
const greetingsTriggers = ['hi','hello','greetings'];
const farewellTriggers = ['bye','goodbye','farewell','sleep'];
const painTriggers = ['ow','pain','die'];

function Content() {

}

Content.prototype.containsObject = function(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

Content.prototype.randomResponse = function(validResponses) {
  const index = _.random(0,validResponses.length-1);
  return validResponses[index];
}

Content.prototype.selectResponses = function(text) {
  const validResponses = [];

  //if (typeof(text) === 'undefined') {
  //  return validResponses;
  //};

  if (this.containsObject(text.toLowerCase(), testingTriggers)) {
    validResponses.concat(testing);
  }
  if (this.containsObject(text.toLowerCase(), greetingsTriggers)) {
    validResponses.concat(greetings);
  }
  if (this.containsObject(text.toLowerCase(), farewellTriggers)) {
    validResponses.concat(farewell);
  }
  if (this.containsObject(text.toLowerCase(), painTriggers)) {
    validResponses.concat(pain);
  }

  return validResponses;

}

Content.prototype.getContent = function(msg) {
// logic here...

  let response = ''

  if (msg != null && msg['text'] !== '') {
          let possibleResponses = this.selectResponses(msg['text']);

          if (possibleResponses.length < 1) {
              possibleResponses.concat(other);
          }

          response = this.randomResponse(possibleResponses);
      } else {
          response = this.randomResponse(turretSpeech);
      }

  //const index = _.random(0,turretSpeech.length-1);
  //response = turretSpeech[index];
  return response;
};

module.exports = Content;
