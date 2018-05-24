console.log( ' client.js ');

$(document).ready(readyNow);

function readyNow(){
  console.log( 'JQ' );
  getQuote();
  $( "#addButton" ).on( 'click', addQuote );

} //end readyNow


function addQuote(){
    console.log( 'in addQuote' );
    let objectToSend = {
        quote: $( '#quoteIn' ).val(),
        author: $( '#authorIn' ).val()
    }; //end objectToSend
    console.log( 'sending:', objectToSend );
    $.ajax({
        method: 'POST',
        url: '/quote',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from server with:', response );
        displayQuote(response);
    }); // end ajax
} //end addGuest

function displayQuote( quotes ){
  // defines variable 'el' to target the html section id quotesOut
  let el = $( "#quotesOut" );
  el.empty();
  for ( let string of quotes) {
    el.append( `<li> ${string.author}:     ${string.quote} </li>` );
  } // end for of
}// end displayQuote

// Keep arrow functions to the server side of .js to avoid jQuery

function getQuote() {
    console.log('getQuote');
    // make AJAX-GET call to server to retrieve guests
    $.ajax({
        method: 'GET',
        url: '/quote'
    }).then( function( response ){
        console.log('back from the server with:', response );
        displayQuote( response );

    });
} // end getGuests
