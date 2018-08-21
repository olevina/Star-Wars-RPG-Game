$(document).ready(function () {




    $('#click1').on('click', function () {
        var img = $('<img />', 
        {
             src: "images/2.jpg",
         });
       
         $('#showimagediv1').html(img).show();
         //$('#click2').html(img).hide();



         var img = $('<img />', 
         {
              src: "images/3.jpg",
          });
        
          $('#showimagediv2').html(img).show();
          //$('#click3').html(img).hide();



          var img = $('<img />', 
         {
              src: "images/4.jpg",
          });
        
          $('#showimagediv3').html(img).show();
         // $('#click4').html(img).hide();
     });


//if the click1 is clicked 
//getDocumentById the rest three images
//show() them in ther assigned divs




});