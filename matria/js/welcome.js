$(document).ready(function(){

  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  // Add smooth scrolling to next section button
  $('.scroll-next').click(function(){
       var nextSection = $(this).closest('section').next('section');
       // Store hash
       var hash = $(nextSection).attr('id');
       $('html, body').animate({
           scrollTop: $(nextSection).offset().top
       }, 800, function(){

         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
   });

   // Add smooth scrolling to prev section button
   $('.scroll-prev').click(function(){
        var prevSection = $(this).closest('section').prev('section');
        // Store hash
        var hash = $(prevSection).attr('id');
        $('html, body').animate({
            scrollTop: $(prevSection).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
    });

   // Add smooth scrolling to top on navbar-brand click
   $('.navbar-brand').click(function(){
        $('html, body').animate({
            scrollTop: $("#page-top").offset().top
        }, 800);
    });

});
