var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: !0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    breakpoints: { 640: { slidesPerView: 2, spaceBetween: 20 }, 768: { slidesPerView: 4, spaceBetween: 40 }, 1024: { slidesPerView: 5, spaceBetween: 50 } },
});
$(document).ready(function () {
    $(".openbtn").click(function(){
        $(".sidebar").toggle();
        if($(".sidebar").is(":hidden")){
            $("#main").css("width","100%")
        }
    });
    $(".adult-number-select").change(function () {
        $(".adult-number-span").html($(this).val());
    });
    $(".child-number-select").change(function () {
        $(".child-number-span").html($(this).val());
    });
    $(".check-all").click(function () {
        var CheckBox = $(this).parent(".Checkbox").parent("li").siblings(".child-list").children("ul").children("li").children(".Checkbox").children(".check-single");
        $(CheckBox).prop("checked", !CheckBox.prop("checked"));
        $(".all-activities").prop("checked", !".all-activities".prop("checked"));
    });
    $(".single-activity").click(function () {
        $(this).parent("li").siblings(".child-list").toggle();
        $(this).children(".fa-angle-down").toggle();
        $(this).children(".fa-angle-up").toggle();
    });
    $(".fltr-top").click(function () {
        $(this).siblings(".filter-links").toggle();
        $(this).children().children(".fa-angle-down").toggle();
        $(this).children().children(".fa-angle-up").toggle();
    });
    $(".filter-container-top.fltr-top").click(function () {
        $(".filter-group").toggle();
    });
    $(".fa-times-circle-o").click(function () {
        $(this).parent().hide();
    })
    var parent = document.querySelector(".range-slider");
    if (!parent) return;
    var rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");
    rangeS.forEach(function (el) {
        el.oninput = function () {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);
            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
            }
            numberS[0].value = slide1;
            numberS[1].value = slide2;
        };
    });
    numberS.forEach(function (el) {
        el.oninput = function () {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);
            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }
            rangeS[0].value = number1;
            rangeS[1].value = number2;
        };
    });
});
