$(document).ready(function(){
  $("form#survey").submit(function(event){
    var favoriteColor =$("select#color").val();
    var favoriteBook =$("select#book").val();
    var favoriteFood =$("select#food").val();
    var result;

   
    if (favoriteColor ==='red' && favoriteBook === 'women' && favoriteFood === "thai") {
      result = "Money";
    
    } else {
     result = "Love";
      
    }
$("#output").text(result);

  event.preventDefault();
  });
});