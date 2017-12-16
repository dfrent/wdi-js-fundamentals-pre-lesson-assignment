// // console.log( 'Pac-Man eats Ghosts for lunch');
//
// var ghosts = ['inky', 'blinky', 'pinky', 'clyde'];
//
// console.log('there are' + ghosts.length + 'ghosts.');
// console.log('their names are: ');
// console.log(ghosts[0]);
// console.log(ghosts[1]);
// console.log(ghosts[2]);
// console.log(ghosts[3]);


var inky = {};
inky.color = 'cyan';
inky.personality = 'shadow';
console.log(inky);

var ghosts = {inky: 'cyan', blinky: 'red', pinky: 'pink', clyde: 'orange'};
console.log(ghosts);

//dot notation
console.log(ghosts.inky); // => 'Cyan'
console.log(ghosts.blinky); // => 'Red'

//squarebracket notation --- same as above
console.log(ghosts['inky']); // => 'Cyan'
console.log(ghosts['blinky']); // => 'Red'
