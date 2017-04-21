var express = require('express');
var app = express();
app.set('view engine', 'ejs'); // Let Express know we want to use EJS.
app.use(express.static('public')); //tell Express that well keep files in the /public directory
app.set('view engine', 'ejs');

// *********
// ejs stuff
// *********
app.get('/', function(request, response) {
    response.render('index');
});

// app.get('/hello/charmander', function(request, response) {
//     response.render('index');
// });
// app.get('/hello/squirtle', function(request, response) {
//     response.render('index');
// });
// app.get('/hello/bulbasaur', function(request, response) {
//     response.render('index');
// });

var questions = {
    'pikachu': {
        question: "What is a pikachu and why is it relevant?",
        answer: " Pikachu is popularly known as the mascot of the Pokémon franchise and a major representative of Nintendo's collective mascots. ",
        image: "http://orig09.deviantart.net/b09f/f/2015/230/e/b/2dancing_pikas_2_by_bestary-d967kcu.gif"
    },
    'charmander': {
        question: "What is a charmander and why is it relevant?",
        answer: "Charmander is a bipedal, reptilian Pokémon with a primarily orange body. Its underside from the chest down and soles are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. ",
        image: "http://image.blingee.com/images15/content/output/000/000/000/45a/282210757_586688.gif"
    },
    'squirtle': {
        question: "What is a squirtle and why is it relevant?",
        answer: "Squirtle is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large brown eyes and a slightly hooked upper lip. ",
        image: "http://pa1.narvii.com/5706/48883eaa614b2588ab7384849a22903394de8495_hq.gif"
    },
    'bulbasaur': {
        question: "What is a bulbasaur and why is it relevant?",
        answer: "Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker green patches. It has red eyes with white pupils and scleras and pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. ",
        image: "http://img0.joyreactor.com/pics/post/funny-pictures-auto-gid-Pokemon-370054.gif"
    }
}


app.get('/hello/:question', function(request, response) {
    var questionKey = request.params['question'];
    var triviaQuestion = questions[questionKey];
    response.render('trivia', {
        'question': triviaQuestion.question,
        'answer': triviaQuestion.answer,
        'image': triviaQuestion.image
    });
});




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

// app.get('/piglatin/:usr_word', function(request, response) {
//     var usr_word = request.params["usr_word"]
//     var pigla = "ay";
//     var output;
//     var vowels = ["a", "e", "i", "o", "u"];
//
//
//     function piggy(usr_word) {
//
//         //if word starts with vowels
//
//         var first = usr_word.slice(0, 1);
//         var sLast = usr_word.slice(0);
//
//         var first2 = usr_word.slice(0, 1);
//         var second = usr_word.slice(1, 2)
//         var sLast2 = usr_word.slice(1);
//
//         var first3 = usr_word.slice(0, 2);
//         var third = usr_word.slice(2, 3)
//         var sLast3 = usr_word.slice(2);
//
//         var first4 = usr_word.slice(0, 3);
//         var fourth = usr_word.slice(3, 4)
//         var sLast4 = usr_word.slice(3);
//
//         if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") {
//             return usr_word + pigla;
//         } else if (second === "a" || second === "e" || second === "i" || second === "o" || second === "u") {
//             return sLast2 + first2 + pigla
//         } else if (third === "a" || third === "e" || third === "i" || third === "o" || third === "u") {
//             return sLast3 + first3 + pigla
//         } else if (fourth === "a" || fourth === "e" || fourth === "i" || fourth === "o" || fourth === "u") {
//             return sLast4 + first4 + pigla
//         } else {
//             return "that would require too much code...use simpler words"
//         }
//     }
//     response.send(piggy(usr_word));
// });

app.listen(process.argv[2], function() {
    console.log("It's working on port: " + process.argv[2])
});









//
