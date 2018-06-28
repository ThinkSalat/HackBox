const mongoose = require('mongoose');
var lineReader = require('line-reader');


const GreenCardSchema = new mongoose.Schema({
  prompt: String,
  flavorText: String,
  cardType: String
})

const GreenCard = mongoose.model("Card", GreenCardSchema)

const regex = /^(.+?)\ -\ \((.+)\)/;

mongoose.connect('mongodb://hackbox:hackbox2018@ds117701.mlab.com:17701/hackbox');
// mongoose.connect('mongodb://127.0.0.1:27017');
mongoose.connection.once('open', function() {
  lineReader.eachLine('apples-green.txt', (line, last) => {
    let match = line.match(regex)
    createCards(match[1], match[2])
  })
 })

createCards = (prompt, flavorText) => {
  console.log(prompt, flavorText);
  GreenCard.create({
    prompt,
    flavorText,
    cardType: "A2AGreenCard"
  })
  console.log('created');
}
