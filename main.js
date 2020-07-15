// Basic Operators

let year, yearJhon, yearMark;
now = 2020;
ageJhon = 28;
ageMark = 33;

// Math Operators

yearJhon = now - ageJhon;
yearMark = now - ageMark;

console.log(yearJhon);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
let JohenOlder = ageJhon < ageMark ;
console.log(JohenOlder);

// typeof operator
console.log(typeof JohenOlder);
console.log(typeof ageJhon);
console.log(typeof "hello world");
let x ;
console.log(typeof x);

// operator precedence 

let fullAge = 18;

// multiple operators 
let isFullAge = now - yearJhon >= fullAge 
console.log(isFullAge);

// grouping 

ageJhon = now - yearJhon ;
let avarageAge = (ageJhon + ageMark) / 2 ;
console.log(avarageAge);

// multiple assignments

let y;
x = y = (5 + 3) * 4 - 6;
console.log(x, y);


// x = x * 2;
x *= 2;
console.log(x);

// x = x + 10;
x += 10;

console.log(x);

// x = x - 1;
x--;
console.log(x);

x++;

console.log(x);







