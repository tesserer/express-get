//Required in Express

let quotes = [
  {
    author: 'me',
    quote: 'hollaa'
  },//end first quote

  {
    author:  'oh dear',
    quote:  'winnie the pooh'

  }//end second quote
];

const express = require('express');

// Create our express app
const app = express();

let bodyParser =  require( 'body-parser' );
app.use( bodyParser.urlencoded ( {exteded: true} ) );

app.use( express.static('server/public') );

const port = 5000;

app.listen( port, () => console.log('Listening on port', port ));

// New route:
app.get('/quote', (req, res) => {
  console.log('Handling the GET request for /quote');

  // Sending back data! That you might put on the DOM with JQuery!
  res.send( quotes );

// Can also be used for
  //res.sendStatus(404);
});
app.post( '/quote', (req, res) => {
    console.log( 'in POST hit for /quote route:', req.body);
    quotes.push(req.body);
    res.send( quotes );
}); // end guests POST
