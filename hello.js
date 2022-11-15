const cowsay = require("cowsay");
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(
    cowsay.say({
        text : getRandomJoke.body,
        e : "❤❤",
        T : "b"
    })
);

/*var yodasay = require("yodasay");
console.log(yodasay.say({
    text : 'Use yodasay, you will'
}));*/

/*var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJokeWithTag.body('flirty');
console.log(getRandomJoke)

console.log{
    name : "Yash",
    age : "21" ,
    org : "BITS",
    food_likes: ['paneer', 'chicken', 79, true],
    details:{
        aadhar: "t78956236",
        dob: "56",
    },
}
*/