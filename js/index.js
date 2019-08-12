$( document ).ready(function() {
    console.log( "ready!" );
    // $(".single-gallery-item").click(function(){
    //     var test = $(this).attr('data-wow-delay');
    //     console.log("clicked");
    //     console.log(test);
    // });
    $(".react-reading-app").click(function() {
        window.location.href = "https://mighty-shore-93875.herokuapp.com/";
    });

    $(".google-books-app").click(function() {
        window.location.href = "https://infinite-mesa-86642.herokuapp.com/";
    });

    $(".eat-wise").click(function() {
        window.location.href = "https://amandat85.github.io/eat-wise/";
    })

    $(".word-guess").click(function() {
        console.log("clicked word guess");
        window.location.href = "https://github.com/david-fetchopia/constructor-word-guess";
    })
    $("#contact_submit").click(function() {
        event.preventDefault;
        var address = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var body = document.getElementById("message").value;

        window.open('mailto:davidm989@gmail.com');
        // console.log(address);
        // console.log(subject);
        // console.log(body);
        // console.log("CLICKED SUBMIT");
    })
});