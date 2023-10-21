$(document).ready(function () {

    // Slick
    $('.interns').slick({
        infinite: false,
        dots: true,
        adaptiveHeight: true
    });
    
    /* -- General -- */
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    // Modal window functionality
    $(".modal-background").click(function () {
        $(this).parent().removeClass("is-active");
    });

    // Tabs functionality
    $(".tabs > ul > li").click(function () {
        $(this).parent().children().removeClass("is-active");
        $(this).addClass("is-active");
    });

    // Dropdown functionality
    $(".dropdown-trigger").click(function () {
        $(this).parent().toggleClass("is-active");
    })

    $(".dropdown-item").click(function () {
        $(this).parent().children().removeClass("is-active");
        $(this).addClass("is-active");

        var text = $(this).text();
        var dropdown = $(this).parents(".dropdown");

        dropdown.removeClass("is-active");
        dropdown.children(".dropdown-trigger").children().text(text);
    })

    /* -- Specific -- */
    // Modal links
    $(".donate").click(function() {
        $("#donation-modal").addClass("is-active");
    })

    $("#arivu-button").click(function() {
        $("#arivu-modal").addClass("is-active");
    })

    $("#celebrate-button").click(function() {
        $("#celebrate-modal").addClass("is-active");
    })

    /* - Donation Things - */
    // Donations tabs
    $("#bank-details-option").click(function() {
        $("#bank-details").removeClass("is-hidden");
        $("#online-donation").addClass("is-hidden");
    });

    $("#online-donation-option").click(function() {
        $("#online-donation").removeClass("is-hidden");
        $("#bank-details").addClass("is-hidden");
    });

    // Online donation options
    var donation_link;
    // It seems to keep the disabled status even after a reload so doing this is just easier
    $("#donation-continue-button").prop("disabled", true);

    $(".dropdown-item").click(function() {
        donation_link = $(this).data("url");
        $("#donation-continue-button").prop("disabled", false);
    });

    $("#donation-continue-button").click(function() {
        window.open(donation_link);
    });

    // Function to check the URL hash
    function checkHash() {
        if(window.location.hash) {
            var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
            if (hash === "donate") { // If the hash is the one we're looking for
                $("#donation-modal").addClass("is-active");
            }
            // You can add else ifs here for other modals if necessary
        }
    }

    // Call the function on page load
    checkHash();
    
    // Also, to ensure the modal opens when users navigate back (using the browser's back button), you need to listen for a hash change in the URL
    $(window).on('hashchange', function() {
        checkHash();
    });

    // "Want to help?" tab thing
    $(".charity-button").click(function() {
        $(".charity-display").addClass("is-hidden")
        $(".charity-" + $(this).attr("data-type")).removeClass("is-hidden")
        
        $(".charity-button").children("img").removeClass("is-active")
        $(this).children("img").addClass("is-active")
    })
});