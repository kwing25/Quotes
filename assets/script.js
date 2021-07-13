// $.getJSON( "quotes.json", function( json ) {
//     console.log( "JSON Data received, name is " + json.name);
// });

// import quotes.json

// with open('data.txt') as json_file:
//     data = json.load(json_file)

//     const fs = require('fs');

// fs.readFile('./customer.json', 'utf8', (err, jsonString) => {
//   if (err) {
//     console.log("File read failed:", err)
//     return 
//   }
//   console.log('File data:', jsonString)
// })

// const fs = require('fs');

// fs.readFile('./customer.json', 'utf8', (err, jsonString) => {
//   if (err) {
//     console.log("File read failed:", err)
//     return 
//   }
//   console.log('File data:', jsonString)
// })

// fetch('https://github.com/kwing25/Quotes/blob/main/lib/quotes.json')
// .then(res => res.json())
// .then(data => {
//   console.log(data)
// })
// .catch(err => console.error(err));


// const data = await import('./lib/quotes.json')
// console.log(data);

var mydata = JSON.parse(data);
alert(mydata[0].name);
alert(mydata[0].age);
alert(mydata[1].name);
alert(mydata[1].age);