$( document ).ready(function() {
    console.log( "ready!" );
    $(".single-gallery-item").click(function(){
        var test = $(this).attr('data-wow-delay');
        console.log("clicked");
        console.log(test);
    });
});