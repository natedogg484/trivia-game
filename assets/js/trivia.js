function clearAnswers() {
    $("img").each(function () {
        $(this).remove();
    })
}

function markIncorrect(el) {
    var img = new Image();
    img.src = '';
    el.append(img);
}

function markCorrect(el) {
    var img = new Image();
    img.src = '';
    el.append(img);
}

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
            console.log("yay!")
        }
        else if (answers[key] !== val) {
            markIncorrect($(this).find("p"));
            console.log("sorry man!")
        }
        else if ( "input:checked" === false) {
            markIncorrect($(this).find("p"));
        }

    });
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