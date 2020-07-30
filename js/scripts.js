
$(document).ready(function(){
    $(".design_description").hide();
    $(".development_description").hide();
    $(".product_description").hide();

$(".text1").hide();
$(".portfolio_image1").animate({
    opacity: 1
});
$(".portfolio_image1").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $('.text1').fadeIn();

}, 
function() {
    $(this).stop().animate({opacity:1},500)
    $('.text1').fadeOut();
});

//The second image

$(".text2").hide();
$(".portfolio_image2").animate({
    opacity: 1
});
$(".portfolio_image2").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $('.text2').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('.text2').fadeOut();
});
//the third image
$(".text3").hide();
$(".portfolio_image3").animate({
    opacity: 1
});
$(".portfolio_image3").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $('.text3').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('.text3').fadeOut();
});
//the fourth
$(".text4").hide();
$(".portfolio_image4").animate({
    opacity: 1
});
$(".portfolio_image4").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $('.text4').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('.text4').fadeOut();
});
//the fifth
$(".text5").hide();
$(".portfolio_image5").animate({
    opacity: 1
});
$(".portfolio_image5").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $('.text5').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('.text5').fadeOut();
});
//the sixth
$(".text6").hide();
$(".portfolio_image6").animate({
    opacity: 1
});
$(".portfolio_image6").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $('.text6').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('.text6').fadeOut();
});
//the seventh
$(".text7").hide();
$(".portfolio_image7").animate({
    opacity: 1
});
$(".portfolio_image7").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $('.text7').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('.text7').fadeOut();
});
//the eighth
$(".text8").hide();
$(".portfolio_image8").animate({
    opacity: 1
});
$(".portfolio_image8").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $('.text8').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('.text8').fadeOut();
});


})


$("#design_toggle").click(function(){
    $(".design_description").show();
    $("#design_toggle").hide();
});
$("#development_toggle").click(function(){
    $(".development_description").show();
    $("#development_toggle").hide();
});
$("#product_toggle").click(function(){
    $(".product_description").show();
    $("#product_toggle").hide();
});
$(".product_description").click(function(){
    $(".product_description").hide();
    $("#product_toggle").show();
});
$(".development_description").click(function(){
    $(".development_description").hide();
    $("#development_toggle").show();
});
$(".design_description").click(function(){
    $(".design_description").hide();
    $("#design_toggle").show();
});

// Form Submision

//form function
function submitDetail(form){
    var name = document.forms["name"]["name"].value;
    var email = document.forms["email"]["email"].value;
    var message = document.forms["message"]["message"].value;
    alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
    }

