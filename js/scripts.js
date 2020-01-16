$(document).ready(function(){
  $("form#survey").submit(function(event){
    var favoriteColor=$("select#favorite-color").val();
    var gender=$("select#gender").val();
    var genderSeeking=$("select#gender-seeking").val();

   
    if (favoriteColor ==='red' && gender === 'male' && genderSeeking === "female") {
      $("img#bradley-hangover").show();
      $("img#bradley-tux").hide();
    } else {
      $("img#bradley-tux").show();
      $("img#bradley-hangover").hide();
    }

  event.preventDefault();
  });
});