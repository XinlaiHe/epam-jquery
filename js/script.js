// Note that the following is a shorthand for the DOMReady event
$(function() {

});

$("#prepend button").click(function() {
	$("#prepend p").prepend("Yo! ");
});

$("#before button").click(function() {
	$("#before p").before("Yo! ");
});

$("#css1 button").click(function() {
    $("#css1 p").css("font-size","2em");
});

$("#css2 button").click(function() {
   $("#css2 p").css({"font-size":"2em","color":"red"});
});

$("#attr1 button").click(function() {
  console.log($("#attr1 p a").attr("href"));
});

$("#attr2 button").click(function() {
  $("#attr2 p a").attr("href", "http://www.google.com");
});

$("#class1 button").click(function() {
  $("#class1 p").addClass("bg-primary");
});

$("#class2 button").click(function() {
  alert($("#class2 p").hasClass("lead"));
});

$("#form1 button").click(function() {
  console.log($("#form1 input").val());
});

$("#form2 button").click(function() {
  $("#form2 input").val("hexinlai");
});

// handle the mouseover event here
$("#mouse").mouseover(function(){
  $("#mouse img").css("width","30%");
});
// handle the form events here

$("#formEvents form").submit(function(event) {
  event.preventDefault();
  console.log($("#formEvents form input[type=email]").val());
  console.log($("#formEvents form input[type=password]").val());
  console.log($("#formEvents form input[type=checkbox]").prop("checked"));
});

//handle animation
$("#animate1").mouseover(function(){
  $("#animate1 img").animate(
    {
      width : "400px"
    }
  );
});
//handle animation
$("#animate2").dblclick(function(){
   var dis = $("#animate2").width()-$("#animate2 img").width();
  if($("#animate2 img").css("margin-left") == "0px"){

    $("#animate2 img").animate(
      {
        "margin-left" : "+="+dis
      },
       "slow"
    );
  }else{

    $("#animate2 img").animate(
      {
        "margin-left" : "0"
      },
       "slow"
    );
  }
});
//handle animation
$("#animate3").click(function(){
  $("#animate3 img").animate(
    {
      opacity : 0

    },
     "slow", "linear", function(){
          $("#animate3 img").attr("src","images/cat.png")
         $("#animate3 img").animate({
            opacity : 1
       }, "slow");
     }
  );
});