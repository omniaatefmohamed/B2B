var swiper=new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:10,autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:50}}});$(document).ready(function(){$(".openbtn").click(function(){$(".sidebar").toggle(),$(".sidebar").is(":hidden")&&$("#main").css("width","100%")}),$(".adult-number-select").change(function(){$(".adult-number-span").html($(this).val())}),$(".child-number-select").change(function(){$(".child-number-span").html($(this).val())}),$(".check-all").click(function(){var e=$(this).parent(".Checkbox").parent("li").siblings(".child-list").children("ul").children("li").children(".Checkbox").children(".check-single");$(e).prop("checked",!e.prop("checked")),$(".all-activities").prop("checked",!".all-activities".prop("checked"))}),$(".single-activity").click(function(){$(this).parent("li").siblings(".child-list").toggle(),$(this).children(".fa-angle-down").toggle(),$(this).children(".fa-angle-up").toggle()}),$(".fltr-top").click(function(){$(this).siblings(".filter-links").toggle(),$(this).children().children(".fa-angle-down").toggle(),$(this).children().children(".fa-angle-up").toggle()}),$(".filter-container-top.fltr-top").click(function(){$(".filter-group").toggle()}),$(".fa-times-circle-o").click(function(){$(this).parent().hide()}),$(document).click(function(e){$(e.target).hasClass(".click-bottom")||0!==$(e.target).siblings(".select-numbers").length||$(".people-number .select-numbers").hide()}),$(".click-bottom").click(function(){$(this).siblings(".select-numbers").toggle()});var e=document.querySelector(".range-slider");if(e){var i=e.querySelectorAll("input[type=range]"),l=e.querySelectorAll("input[type=number]");i.forEach(function(e){e.oninput=function(){var e=parseFloat(i[0].value),n=parseFloat(i[1].value);e>n&&([e,n]=[n,e]),l[0].value=e,l[1].value=n}}),l.forEach(function(e){e.oninput=function(){var e=parseFloat(l[0].value),n=parseFloat(l[1].value);e>n&&(l[0].value=n,l[1].value=e),i[0].value=e,i[1].value=n}})}});