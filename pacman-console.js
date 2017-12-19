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


// var inky = {};
// inky.color = 'cyan';
// inky.personality = 'shadow';
// console.log(inky);
//
// var ghosts = {inky: 'cyan', blinky: 'red', pinky: 'pink', clyde: 'orange'};
// console.log(ghosts);
//
// //dot notation
// console.log(ghosts.inky); // => 'Cyan'
// console.log(ghosts.blinky); // => 'Red'
//
// //squarebracket notation --- same as above
// console.log(ghosts['inky']); // => 'Cyan'
// console.log(ghosts['blinky']); // => 'Red'


//------loops------
//
// var ghosts = ['inky', 'blinky', 'pinky', 'clyde'];
//
// for (var index = 0; index < ghosts.length; index++) {
//   console.log('Pac-Man eats ' + ghosts[index]);
// }

// ------if conditionals--------

// var powerPelletEaten = false;
// var ghosts = 4;
//
// while (true) {
//  console.log('ghosts remaining:' + ghosts);
//
//  if (powerPelletEaten == false) {
//     console.log('Pac-Man eats the power pellet.');
//     powerPelletEaten = true;}
//
//   else if (ghosts > 0) {
//     console.log('Pac-Man eats a ghost.'); ghosts--;}
//      else
//      {break;}}
//
// console.log('pac-man returns home after a long day at the maze.');

//-----switch condition-----//


// var ghost = 'Blinky';
// var color;
//
// switch (ghost) { case 'Blinky': color = 'Cyan';
// break;
// case 'Inky': color = 'pink';
// break;
// case 'Clyde': color = "Orange";
// break;}
//
// console.log(ghost + ' is the color ' + color);


//---functions---

function eatDot() {console.log("MUNCH!");}

var eatDot = function(){ console.log("MUNCH!");}


console.log(eatDot);
