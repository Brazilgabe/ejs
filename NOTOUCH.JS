var express = require('express');
var app = express();


// *******
// // name or sentence reversal
// *******

// app.get('/home/:name', function(request, response) {
//     var name = request.params['name']
//
//     function reverseString(str) {
//         return str.split("").reverse().join("");
//     }
//     response.send(reverseString(name));
// });
//
// app.listen(process.argv[2], function() {
//     console.log("It's working on port: " + process.argv[2])
// });



// *******
// adding function
// *******

// app.get('/add/:first/:second', function(request, response) {
//     var first = request.params['first']
//     var second = request.params['second']
//
//     function add() {
//         var sum = parseInt(first) + parseInt(second)
//         return sum.toString()
//     }
//     response.send(add());
// });
//
// app.listen(process.argv[2], function() {
//     console.log("It's working on port: " + process.argv[2])
// });



// *******
// piglatin nonsence
// *******

app.get('/piglatin/:usr_word', function(request, response) {
    var usr_word = request.params["usr_word"]
    var pigla = "ay";
    var output;
    var vowels = ["a", "e", "i", "o", "u"];


    function piggy(usr_word) {

        //if word starts with vowels

        var first = usr_word.slice(0, 1);
        var sLast = usr_word.slice(0);

        var first2 = usr_word.slice(0, 1);
        var second = usr_word.slice(1, 2)
        var sLast2 = usr_word.slice(1);

        var first3 = usr_word.slice(0, 2);
        var third = usr_word.slice(2, 3)
        var sLast3 = usr_word.slice(2);

        var first4 = usr_word.slice(0, 3);
        var fourth = usr_word.slice(3, 4)
        var sLast4 = usr_word.slice(3);

        if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") {
            return usr_word + pigla;
        } else if (second === "a" || second === "e" || second === "i" || second === "o" || second === "u") {
            return sLast2 + first2 + pigla
        } else if (third === "a" || third === "e" || third === "i" || third === "o" || third === "u") {
            return sLast3 + first3 + pigla
        } else if (fourth === "a" || fourth === "e" || fourth === "i" || fourth === "o" || fourth === "u") {
            return sLast4 + first4 + pigla
        } else {
            return "that would require too much code...use simpler words"
        }
    }
    response.send(piggy(usr_word));
});

app.listen(process.argv[2], function() {
    console.log("It's working on port: " + process.argv[2])
});









//
