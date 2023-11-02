const sect = document.querySelector('body');
const szanse = Math.floor(Math.random() * 100) + 1 + '%';
const heading = document.createElement('h1');
heading.textContent = `Szanse, ze Kamilek pojdzie jutro do pracy wynosza ${szanse}`;
sect.appendChild(heading);




// function Person(name, marker) {
//   this.name = name
//   this.marker = marker
// }
// Person.prototype.sayName = function() {
//   console.log(`Hello, I'm ${this.name}!`)
// }
// Person.prototype.getMarker = function() {
//   console.log(`My marker is '${this.marker}'`)
// }
// const player1 = new Person('steve', 'X')
// const player2 = new Person('also steve', 'O')

// player1.sayName() // Hello, I'm steve!
// player2.sayName() // Hello, I'm also steve!

// player1.getMarker() // My marker is 'X'
// player2.getMarker() // My marker is 'O'