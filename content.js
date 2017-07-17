'use strict';

const turretSpeech = require('./turretSpeech.js');
const _ = require('lodash');

function Content() {

}



Content.prototype.getContent = function(msg) {
// logic here...
  const index = _.random(0,turretSpeech.length-1);
  let response = turretSpeech[index];
  return response;
};

module.exports = Content;