var express = require('express');
var app = express();

app.get('/piglatin/:usr_word', function(request, response) {
    var usr_word = request.params["usr_word"]

    function piggy(usr_word) {
        var checkLetter = usr_word.split("")
        var pigla = "ay";
        var output
        if (checkLetter[0] === "a" || checkLetter[0] === "e" || checkLetter[0] === "i" || checkLetter[0] === "o" || checkLetter[0] === "u") {
            return usr_word + pigla;
        } else {
            for (i = 0; i < usr_word.length; i++) {
                if (checkLetter[i] === "a" || checkLetter[i] === "e" || checkLetter[i] === "i" || checkLetter[i] === "o" || checkLetter[i] === "u") {
                    var foundVowel = usr_word.slice(i)
                    var prefix = usr_word.slice(0, i)
                    output = foundVowel + prefix + pigla
                }
            }
            return output
        }
    };
    response.send(piggy(usr_word));
})

app.listen(process.argv[2], function() {
    console.log("It's working on port: " + process.argv[2])
});
