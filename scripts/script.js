function showAns() {
  var checkBox = document.getElementById("myCheck"); //Checkbox variables are created for each checkbox question
  var checkBox2 = document.getElementById("myCheck2");
  var checkBox3 = document.getElementById("myCheck3");

  var text = document.getElementById("text"); //This is the answer text for each respective checkbox
  var text2 = document.getElementById("text2");
  var text3 = document.getElementById("text3");

  if (checkBox.checked == true){  //The answer appears when the checkbox is clicked
    text.style.display = "block";
  } else {
     text.style.display = "none"; //If the checkbox is not checked, the answer is hidden
  }

  if (checkBox2.checked == true){
    text2.style.display = "block";
  } else {
     text2.style.display = "none";
  }

if (checkBox3.checked == true){
  text3.style.display = "block";
} else {
   text3.style.display = "none";
}
}

$(document).ready(function(){
  $("#btn1").click(function(){
    $("#box").animate({height: "300px"}); //Clicking on the first h2 increases the box height.
  });
  $("#btn2").click(function(){
    $("#box").animate({height: "100px"}); //Clicking on the second h2 resets the height.
  });
});

$(document).ready(function(){
  $("#panel1").click(function(){ //Panel slides down on click
    $("#panel2").slideDown("slow"); //Slow speed parameter used
    $("#panel2").slideDown("slow");
  });
});

$(document).ready(function(){
  $("#boxbutton").click(function(){ //When button with id boxbutton is clicked the box1 div fades in or out.
    $("#box1").fadeToggle();
  });
});



