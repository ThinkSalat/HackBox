const mongoose = require('mongoose');
var lineReader = require('line-reader');


const RedCardSchema = new mongoose.Schema({
  prompt: String,
  flavorText: String,
  cardType: String
})

const RedCard = mongoose.model("Card", RedCardSchema)

const regex = /(.+?) - (.+)/;

mongoose.connect('mongodb://hackbox:hackbox2018@ds117701.mlab.com:17701/hackbox');
// mongoose.connect('mongodb://127.0.0.1:27017');
mongoose.connection.once('open', function() {
  lineReader.eachLine('apples-red.txt', (line, last) => {
    let match = line.match(regex)
    createCards(match[1], match[2])
  })
 })

createCards = (prompt, flavorText) => {
  console.log(prompt, flavorText);
  RedCard.create({
    prompt,
    flavorText,
    cardType: "A2ARedCard"
  })
  console.log('created');
}
