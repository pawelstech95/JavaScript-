// let s = "😀";

// console.log(s.length);
// console.log(s[0]);
// console.log(s[1]);

// for(let ch of s) {
//     console.log(ch);
// }

// console.log( [...s].length );

// let s = "Witam =😀=";

// let regex = /=(.)=/u;

// console.log( regex.exec(s) );

let emails = "jan@kowalski.planna@nowak.pl.";
let emailRegex = /\w+@\w+\.[a-z]{2,3}?/y;

let result = null;

while(result = emailRegex.exec(emails)) {
    console.log(emailRegex.lastIndex);
    console.log(result);
}

console.log( emailRegex.flags );
console.log( emailRegex.sticky );
console.log( emailRegex.unicode );