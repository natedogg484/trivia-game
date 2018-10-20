$("#StartButton").click(function () {
    $("#startScreen").hide();
    $("#game").show();

    var count = 91
    var counter = setInterval(timer, 1000)
    function timer() {
        count = count - 1;
        if (count <= 0) {
            $('#game').hide();
            $('#loseScreen').show();

        };
        $("#timer").text("Time left: " + count)

    }
    
});



function clearAnswers() {
    $("img").each(function () {
        $(this).remove();
    })
};

function markIncorrect(el) {
    var yes = $("<p>Correct!</p>")
    el.append(yes)
};

function markCorrect(el) {
    var no = $("<p>Incorrect!</p>")
    el.append(no);
};

var correct = 0;
var incorrect = 0;

$("form").on("submit", function (e) {
    e.preventDefault();
    clearAnswers();


    $questions = $(".question");
    $questions.each(function () {
        var answer = $(this).find("input:checked"),
            key = answer.attr("name"),
            val = answer.attr("value");

        if (answers[key] === val) {
            markCorrect($(this).find("p"));
            correct++
        }
        else if (answers[key] !== val) {
            markIncorrect($(this).find("p"));
            incorrect++
        }


    });
    
    $("#percentage").text((correct + " Questions Right! ") + (incorrect + (" Questions Wrong!")));

});



var answers = {
    "one": "b",
    "two": "c",
    "three": "a",
    "four": "d",
    "five": "c",
    "six": "c",
    "seven": "a",
    "eight": "a",
    "nine": "c",
    "ten": "b"
}