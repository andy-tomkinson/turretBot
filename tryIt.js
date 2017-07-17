const Content = require('./content.js');

let contentMaker = new Content();
let messageText = contentMaker.getContent({text:''});

console.log(messageText);