$(document).ready(function () {



    //if you click on darth sidious the rest of the characters appear in Enemies available to fight section, where I assigned special divs for that.

    $('#click1').on('click', function () {
        var img = $('<img />',
            {
                src: "images/2.jpg",
                class: "images",
            });

        $('#showimagediv1').html(img).show();
        //$('#click2').html(img).hide();



        var img = $('<img />',
            {
                src: "images/3.jpg",
                class: "images",
            });

        $('#showimagediv2').html(img).show();
        //$('#click3').html(img).hide();



        var img = $('<img />',
            {
                src: "images/4.jpg",
                class: "images",
            });

        $('#showimagediv3').html(img).show();
        // $('#click4').html(img).hide();
    });





     //if you click on luke the rest of the characters appear in Enemies available to fight section, where I assigned special divs for that.

    $('#click2').on('click', function () {
        var img = $('<img />',
            {
                src: "images/1.jpg",
                class: "images",
            });

        $('#showimagediv1').html(img).show();
        //$('#click2').html(img).hide();



        var img = $('<img />',
            {
                src: "images/3.jpg",
                class: "images",
            });

        $('#showimagediv2').html(img).show();
        //$('#click3').html(img).hide();



        var img = $('<img />',
            {
                src: "images/4.jpg",
                class: "images",
            });

        $('#showimagediv3').html(img).show();
        // $('#click4').html(img).hide();
    });


         //if you click on the red guy the rest of the characters appear in Enemies available to fight section, where I assigned special divs for that.

         $('#click3').on('click', function () {
            var img = $('<img />',
                {
                    src: "images/1.jpg",
                    class: "images",
                });
    
            $('#showimagediv1').html(img).show();
            //$('#click2').html(img).hide();
    
    
    
            var img = $('<img />',
                {
                    src: "images/2.jpg",
                    class: "images",
                });
    
            $('#showimagediv2').html(img).show();
            //$('#click3').html(img).hide();
    
    
    
            var img = $('<img />',
                {
                    src: "images/4.jpg",
                    class: "images",
                });
    
            $('#showimagediv3').html(img).show();
            // $('#click4').html(img).hide();
        });



                 //if you click on obi the rest of the characters appear in Enemies available to fight section, where I assigned special divs for that.

                 $('#click4').on('click', function () {
                    var img = $('<img />',
                        {
                            src: "images/1.jpg",
                            class: "images",
                        });
            
                    $('#showimagediv1').html(img).show();
                    //$('#click2').html(img).hide();
            
            
            
                    var img = $('<img />',
                        {
                            src: "images/2.jpg",
                            class: "images",
                        });
            
                    $('#showimagediv2').html(img).show();
                    //$('#click3').html(img).hide();
            
            
            
                    var img = $('<img />',
                        {
                            src: "images/3.jpg",
                            class: "images",
                        });
            
                    $('#showimagediv3').html(img).show();
                    // $('#click4').html(img).hide();
                });


});