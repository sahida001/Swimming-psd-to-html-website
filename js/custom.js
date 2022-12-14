$(".mybutton").click(function () {
    document.getElementById("loren").innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    document.getElementById("button1").innerHTML = "Hide";
    $(".background1").css("background-color", "#ff7a7a");
    $("#button1").click(function () {
        document.getElementById("loren").innerHTML = "";
        document.getElementById("button1").innerHTML = "Read More";
        $(".background1").css("background-color", "#f7f7f7");
    });
});

$(".mybutton1").click(function () {
    $(".background2 p").hide();
    document.getElementById("button2").innerHTML = "Reset";
    $("#button2").click(function () {
        document.getElementById("button2").innerHTML = "Read More";
        $(".background2 p").show();
    });
});

$(".mybutton2").hover(function () {
    $("#button3").addClass("glow-on-hover");

}, function () {
    $("#button3").removeClass("glow-on-hover");
}
);

var num = 500; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar-expand-lg').addClass('fixed');
    } else {
        $('.navbar-expand-lg').removeClass('fixed');
    }
});