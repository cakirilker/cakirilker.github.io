var skills = ["skiing", "fencing", "reading about history", "designing stuff"],
    counter = skills.length - 1,
    previousSkill = $(".hobbies"),
    arraylength = skills.length - 1;

function display_skills() {
    if (counter === arraylength) {
        counter = 0;
    }
    else {
        counter++;
    }
    $('.hobbies > span > strong').fadeOut(200, function () {
        $(this).text(skills[counter]).fadeIn(200);
    });

}

display_skills();

setInterval(function () {
    display_skills();
}, 2500);
