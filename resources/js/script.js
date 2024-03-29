$(document).ready(function () {
  //Add sticky nav
  $(".js--about-section").waypoint(function (direction) {
    if (direction == "down") {
      $(".logo").attr("src", "../resources/images/logo_black.png");
      $("nav").addClass("sticky-nav");
    } else {
      $(".logo").attr("src", "../resources/images/logo.png");
      $("nav").removeClass("sticky-nav");
    }
  });

  //animate about us image
  $(".js--about-section").waypoint(
    function (direction) {
      $(".js--about-section").addClass("animate__animated animate__fadeIn");
    },
    { offset: "70%" }
  );

  $(".js--services-section").waypoint(
    function (direction) {
      $(".js--service-box").addClass("animate__animated animate__zoomIn");
    },
    { offset: "30%" }
  );

  $(".js--packages-section").waypoint(function (direction) {
    $(".js--package-box").addClass("animate__animated animate__pulse");
  });

  // $(".js--scroll-to-contact").click(function () {
  //   $("html, body").animate({ scrollTop: $(".js--contact").offset().top }, 500);
  // });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            800,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
