const quote=require('./quotesCreator.js');
var Quote = quote.getRandomQuote();
console.log(Quote.text);
console.log('Author - '+Quote.author);