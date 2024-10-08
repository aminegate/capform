$(document).ready(function () {

    "use strict";

    /*********************** Inputs Checker *****************************/
    
    /*
           
// Select Checker Start
$('select').each(function () {
    var $select = $(this);
    var $warning = $select.next('.warning');

    if ($select.val() === "") {
        $warning.addClass('warningDisplay');
        $select.css('border', '2px solid red'); // Add red border to the select element
        hasWarning = true; // Set the flag if there's a warning
    } else {
        $warning.removeClass('warningDisplay');
        $select.css('border', ''); // Remove the red border if the value is valid
    }
});
// Select Checker End

// Input Text Checker Start
$('input[type="text"]').each(function () {
    var $input = $(this);
    var $warning = $input.next('.warning');

    if ($input.val().trim() === "") {
        $warning.addClass('warningDisplay');
        $input.css('border', '2px solid red'); // Add red border to the input element
        hasWarning = true; // Set the flag if there's a warning
    } else {
        $warning.removeClass('warningDisplay');
        $input.css('border', ''); // Remove the red border if the value is valid
    }
});
// Input Text Checker End

// Input Date Checker Start

$('input[type="date"]').each(function () {
    var $input = $(this);
    var $warning = $input.next('.warning');

    if ($input.val() === "") {
        $warning.addClass('warningDisplay');
        $input.css('border', '2px solid red'); // Add red border to the input element
        hasWarning = true; // Set the flag if there's a warning
    } else {
        $warning.removeClass('warningDisplay');
        $input.css('border', ''); // Remove the red border if the value is valid
    }
});
// Input Date Checker End

// Input Radio Checker Start
$('input[type="radio"]').each(function () {
    var groupName = $(this).attr('name'); // Get the group name of the radio button
    var $warning = $(this).closest('.etatWrapper').find('.warning'); // Correctly find the warning element in the closest wrapper

    // Check if any radio button in the group is chosen
    if ($('input[name="' + groupName + '"]:checked').length === 0) {
        $warning.addClass('warningDisplay');
        $(this).closest('.etatWrapper').css('border', '2px solid red'); // Add red border to the radio group wrapper
        hasWarning = true; // Set the flag if there's a warning
    } else {
        $warning.removeClass('warningDisplay');
        $(this).closest('.etatWrapper').css('border', ''); // Remove the red border if a radio button is selected
    }
});
// Input Radio Checker End

    
    
    /******************** Print option for buttons + display warning when nothing is selected or choosed or filled  ***********************/
    /* Start */

var lastButtonClicked = null; // Track the last clicked button

// Object to map button types to their respective warning check functions
var buttonWarningChecks = {
    button1: function () {
        var hasWarning = false; // Flag to track if there are any warnings

        // Check for select elements related to Button 1
        $('select').each(function () {
            var $select = $(this);
            var $warning = $select.next('.warning');

            if ($select.val() === "") {
                $warning.addClass('warningDisplay');
                $select.css('border', '2px solid red'); // Add red border to the select element
                hasWarning = true; // Set the flag if there's a warning
            } else {
                $warning.removeClass('warningDisplay');
                $select.css('border', ''); // Remove the red border if the value is valid
            }
        });

        $('input[type="text"]').each(function () {
            var $input = $(this);
            var $warning = $input.next('.warning');

            if ($input.val().trim() === "") {
                $warning.addClass('warningDisplay');
                $input.css('border', '2px solid red'); // Add red border to the input element
                hasWarning = true; // Set the flag if there's a warning
            } else {
                $warning.removeClass('warningDisplay');
                $input.css('border', ''); // Remove the red border if the value is valid
            }
        });

        // Check for date inputs
        $('input[type="date"]').each(function () {
            var $input = $(this);
            var $warning = $input.next('.warning');

            if ($input.val() === "") {
                $warning.addClass('warningDisplay');
                $input.css('border', '2px solid red'); // Add red border to the input element
                hasWarning = true; // Set the flag if there's a warning
            } else {
                $warning.removeClass('warningDisplay');
                $input.css('border', ''); // Remove the red border if the value is valid
            }
        });
        
        return hasWarning;
    },

    /************************ button 2 start ************************************/

    button2: function () {
        var hasWarning = false; // Flag to track if there are any warnings

        // Check for select elements related to Button 2
        $('#client').each(function () {
            var $select = $(this);
            var $warning = $select.next('.warning');

            if ($select.val() === "") {
                $warning.addClass('warningDisplay');
                $select.css('border', '2px solid red'); // Add red border to the select element
                hasWarning = true; // Set the flag if there's a warning
            } else {
                $warning.removeClass('warningDisplay');
                $select.css('border', ''); // Remove the red border if the value is valid
            }
        });

        // Check for radio buttons related to Button 2
        $('.etatContainer').each(function () {
            var groupName = $(this).attr('name'); // Get the group name of the radio button
            var $warning = $(this).closest('.etatWrapper').find('.warning'); // Correctly find the warning element in the closest wrapper

            // Check if any radio button in the group is chosen
            if ($('input[name="' + groupName + '"]:checked').length === 0) {
                $warning.addClass('warningDisplay');
                $(this).closest('.etatWrapper').css('border', '2px solid red'); // Add red border to the radio group wrapper
                hasWarning = true; // Set the flag if there's a warning
            } else {
                $warning.removeClass('warningDisplay');
                $(this).closest('.etatWrapper').css('border', ''); // Remove the red border if a radio button is selected
            }
        });

        return hasWarning;
    },
    // You can add more button checks here as needed
    // button3: function () { ... },
    // button4: function () { ... },
};

// Function to clear warnings for a specific button type
function clearWarnings(buttonType) {
    // Clear warnings for all select fields
    $('select').each(function () {
        var $select = $(this);
        var $warning = $select.next('.warning');
        $warning.removeClass('warningDisplay'); // Hide warning
        $select.css('border', ''); // Remove the red border
    });

    // Clear warnings for all text inputs
    $('input[type="text"]').each(function () {
        var $input = $(this);
        var $warning = $input.next('.warning');
        $warning.removeClass('warningDisplay'); // Hide warning
        $input.css('border', ''); // Remove the red border
    });

    // Clear warnings for date inputs
    $('input[type="date"]').each(function () {
        var $input = $(this);
        var $warning = $input.next('.warning');
        $warning.removeClass('warningDisplay'); // Hide warning
        $input.css('border', ''); // Remove the red border
    });

    // Clear warnings for radio buttons
    $('input[type="radio"]').each(function () {
        var $radio = $(this);
        var $warning = $radio.closest('.etatWrapper').find('.warning');
        $warning.removeClass('warningDisplay'); // Hide warning
        $radio.closest('.etatWrapper').css('border', ''); // Remove the red border from the radio button group wrapper
    });
}

// Attach a single event handler for all buttons
$('fieldset').on('click', 'button.toggle-button', function (event) {
    event.preventDefault(); // Prevent the default behavior

    // Check if the window width is 768px or above before setting overflow
    if ($(window).width() >= 768) {
        $('body').css('overflow', 'auto'); // Set body overflow to auto if screen width is 768 or more
    }

    // Get the ID of the clicked button to determine which button it is
    var buttonId = $(this).attr('id'); // Get the button ID
    var buttonType = buttonId.replace('submit-', 'button'); // Create a button type (button1, button2, etc.)

    // Clear warnings from the last clicked button if it was not this one
    if (lastButtonClicked && lastButtonClicked !== buttonType) {
        clearWarnings(lastButtonClicked);
    }

    lastButtonClicked = buttonType; // Update last clicked button

    // Call the appropriate warning check function based on the button clicked
    var hasWarning = buttonWarningChecks[buttonType] ? buttonWarningChecks[buttonType]() : false; // Call the function for the button type
    
// If there are warnings, perform the flash effect
if ($('.rightSideWrapper .warningDisplay').length) { // Check if there are warnings
    var $rightSideWrapper = $('.rightSideWrapper');

    // Flash effect immediately
    $rightSideWrapper.addClass('flash-effect'); // Add flash effect class

    // Remove the flash effect after the specified time
    setTimeout(function () {
        $rightSideWrapper.removeClass('flash-effect'); // Revert back to original
    }, 250); // Flash duration

    // Flash again
    setTimeout(function () {
        $rightSideWrapper.addClass('flash-effect'); // Flash again
    }, 500); // Time until the second flash

    // Revert again
    setTimeout(function () {
        $rightSideWrapper.removeClass('flash-effect'); // Revert back to original
    }, 750); // Revert back to original after the second flash
}

});

     /******************** For Small Screen : Check if theres a red warning and display rightSideWrapper  ***********************/
    /* Start */

    
    // Function to handle warnings and apply effects
function handleWarnings(hasWarning) {
    // Check if the right side is already open
    var isRightSideOpen = $('.rightSideWrapper').hasClass('show');
    
    // Only apply effects if the window width is 992 or less
    if ($(window).width() <= 992) {
        if (hasWarning && !isRightSideOpen) {
            // Show and shrink the right side wrapper
            $('.rightSideWrapper').addClass('show');

            // Hide the second and last columns with smooth transition
            $('td:nth-child(2), td:last-child, th:nth-child(2), th:last-child').each(function () {
                $(this).data('origWidth', $(this).width()); // Store original width
                $(this).data('origPadding', $(this).css('padding')); // Store original padding
                $(this).data('origFontSize', $(this).css('font-size')); // Store original font-size

                // Animate the hiding of columns smoothly
                $(this).css({
                    'overflow': 'hidden', // Hide overflow to prevent content visibility
                    'display': 'table-cell' // Ensure it is treated as a table cell during animation
                }).animate({
                    width: '0', // Collapse the width
                    padding: '0', // Remove padding
                    'font-size': '0', // Hide content
                    opacity: 0 // Fade out smoothly
                }, 500, function () {
                    $(this).css('display', 'none'); // Set display to none after animation to remove space
                });
            });

            // Reduce the left side wrapper
            $('.leftSideWrapper').addClass('reduce');

            // Disable body scrolling on small screens
            $('body').css('overflow', 'hidden'); // Disable body scrolling
            $('form').css('overflow-y', 'auto'); // Enable scrolling for the form

            // Update the button text if needed
            if ($('#displayOnSmallScreen').text() === 'Afficher le formulaire') {
                $('#displayOnSmallScreen').text('Masquer le formulaire');
                $('#displayOnSmallScreen').addClass('shrink');
            }

        } else if (!hasWarning && isRightSideOpen) {
            // If there are no warnings and the right side is open, reset the right and left side wrappers

            // Restore the original padding and remove shrink
            $('.rightSideWrapper').removeClass('show');

            // Show the second and last columns with smooth transition
            $('td:nth-child(2), td:last-child, th:nth-child(2), th:last-child').each(function () {
                $(this).css('display', 'table-cell'); // Set display to table-cell to start the animation

                // Animate the restoration of columns smoothly
                $(this).animate({
                    width: $(this).data('origWidth'), // Restore original width
                    padding: $(this).data('origPadding'), // Restore original padding
                    'font-size': $(this).data('origFontSize'), // Restore original font-size
                    opacity: 1 // Fade in smoothly
                }, 500, function () {
                    $(this).css('overflow', ''); // Reset overflow property after animation
                });
            });

            // Restore the left side wrapper
            $('.leftSideWrapper').removeClass('reduce');

            // Allow body scrolling again
            $('body').css('overflow', 'auto'); // Enable scrolling on the body
            $('form').css('overflow-y', ''); // Reset overflow for the form

            // Update the button text if needed
            if ($('#displayOnSmallScreen').text() === 'Masquer le formulaire') {
                $('#displayOnSmallScreen').text('Afficher le formulaire');
                $('#displayOnSmallScreen').removeClass('shrink');
            }
        }
    } else {
        // If the screen width is greater than 992, do nothing
        console.log("Screen width is greater than 992px, no action taken.");
    }
}

// Attach click event to all buttons with class 'toggle-button' inside fieldsets
$('fieldset button.toggle-button').on('click', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Check for warnings based on the presence of a warning class in <p>
    var hasWarning = $('p.warning').length > 0; // Check if there's any <p> with the class 'warning'

    // Call the function to handle warnings
    handleWarnings(hasWarning);
});


        /* End */
    
    /************* Loop Year (année) Select ************/
    /* start */

    for (var i = 2024; i >= 2000; i--) {
        var x = "<option>" + i + "</option>";
        document.getElementById("year").innerHTML += x;
    }
    /* end */
    /************* Get today's date in "Date traitement" ************/
    /* start */
    (function () {
        // Get today's date
        var today = new Date();

        // Format the date to YYYY-MM-DD
        var formattedDate = today.toISOString().split('T')[0];

        // Set the value of the date input using jQuery
        $('#dateProcessing').val(formattedDate);
    })(); // Self-invoking function
    /* end */
    /************* Get the first day of the month and the last in "date debut" & "date fin" ************/
    /* start */
    (function () {
        // Get current date
        var today = new Date();

        // Get the first day of the current month (UTC+1 for Morocco)
        var firstDay = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1));

        // Get the last day of the current month (UTC+1 for Morocco)
        var lastDay = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() + 1, 0));

        // Format date to YYYY-MM-DD
        function formatDate(date) {
            return date.toISOString().split('T')[0];
        }

        // Set the values of the input fields
        $('#dateStart').val(formatDate(firstDay));
        $('#dateEnd').val(formatDate(lastDay));
    })();

    /* end */

    /******************** hide/show warning when you select / fill / choose an element *****************************/
    /* start */

// Change event for select elements
$('select').on('change', function () {
    var $select = $(this);
    var $warning = $select.next('.warning');

    if ($select.val() === "") {
        $warning.addClass('warningDisplay'); // Show warning if empty
        $select.css('border', '2px solid red'); // Add red border
    } else {
        $warning.removeClass('warningDisplay'); // Hide warning if not empty
        $select.css('border', ''); // Remove red border
    }
});

// Change event for text inputs
$('input[type="text"]').on('input', function () {
    var $input = $(this);
    var $warning = $input.next('.warning');

    if ($input.val().trim() === "") {
        $warning.addClass('warningDisplay'); // Show warning if empty
        $input.css('border', '2px solid red'); // Add red border
    } else {
        $warning.removeClass('warningDisplay'); // Hide warning if not empty
        $input.css('border', ''); // Remove red border
    }
});

// Change event for date inputs
$('input[type="date"]').on('change', function () {
    var $input = $(this);
    var $warning = $input.next('.warning');

    if ($input.val() === "") {
        $warning.addClass('warningDisplay'); // Show warning if empty
        $input.css('border', '2px solid red'); // Add red border
    } else {
        $warning.removeClass('warningDisplay'); // Hide warning if not empty
        $input.css('border', ''); // Remove red border
    }
});

// Hide the warning when a radio button is selected
$('input[type="radio"]').on('change', function () {
    var groupName = $(this).attr('name'); // Get the group name of the radio button
    var $warning = $(this).closest('.etatWrapper').find('.warning'); // Correctly find the warning element

    if ($('input[name="' + groupName + '"]:checked').length > 0) {
        $warning.removeClass('warningDisplay'); // Hide the warning if a radio is selected
        $(this).closest('.etatWrapper').css('border', ''); // Remove red border from the radio button group wrapper
    }
});


    /* end */
    /************* Apply border-radius style if theres more than one button **************/


    /* Start */

    // Loop through each <td> that contains buttons
    $('td').each(function () {
        // Get all buttons within the current <td>
        var $buttons = $(this).find('.toggle-button');

        if ($buttons.length === 1) {
            // If there is only one button, apply border-radius to all corners
            $buttons.css({
                'border-radius': '5px' // Apply your desired border-radius
            });
        } else if ($buttons.length > 1) {
            // If there is more than one button
            // Apply border-radius to the first button (top-left and top-right)
            $buttons.first().css({
                'border-top-left-radius': '5px', // Top-left radius
                'border-top-right-radius': '5px', // Top-right radius
                'margin-bottom': '10px'
            });

            // Apply border-radius to the last button (bottom-left and bottom-right)
            $buttons.last().css({
                'border-bottom-left-radius': '5px', // Bottom-left radius
                'border-bottom-right-radius': '5px', // Bottom-right radius
                'margin-bottom': '0px'
            });

            // Remove any border-radius for the middle buttons (if any)
            $buttons.slice(1, -1).css({
                'border-radius': '0', // No border-radius for middle buttons
                'margin-bottom': '10px'
            });
        }
    });


    /* end */
    /************* Smooth Scroll + flash animation + hide rightSideWrapper if open on small screen **************/
    
    /* start */

    // Handle the navLink click event
    $('.navLink').on('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        var target = $(this).attr('href'); // Get the target fieldset ID
        var $fieldset = $(target);

        // Check if the right side wrapper is open and close it
        if ($('.rightSideWrapper').hasClass('show')) {
            // Close the right side wrapper
            $('.rightSideWrapper').removeClass('show');
            $('#displayOnSmallScreen').text('Afficher le formulaire'); // Change the button text back to "Afficher le formulaire"

            // Allow scrolling again based on screen width
            if ($(window).width() <= 576) {
                $('body').css('overflow', 'auto'); // Enable scrolling on the body
                $('form').css('overflow-y', ''); // Reset overflow for the form
            } else if ($(window).width() > 576 && $(window).width() <= 992) {
                $('body').css('overflow-y', ''); // Reset overflow for the body
                $('form').css('overflow-y', ''); // Reset overflow for the form
            }

            // Restore any shrunken elements
            $('#displayOnSmallScreen').removeClass('shrink');
            $('fieldset, .printSection, legend').each(function () {
                $(this).animate({
                    padding: $(this).data('origPadding'), // Restore original padding
                    height: $(this).data('origHeight') // Restore original height
                }, 500);
            });

            // Restore hidden columns
            $('td:nth-child(2), td:last-child, th:nth-child(2), th:last-child').each(function () {
                $(this).css('display', 'table-cell').animate({
                    width: $(this).data('origWidth'), // Restore original width
                    padding: $(this).data('origPadding'), // Restore original padding
                    'font-size': $(this).data('origFontSize'), // Restore original font-size
                    opacity: 1 // Fade in smoothly
                }, 500);
            });

            // Restore left side wrapper width
            $('.leftSideWrapper').removeClass('reduce');
        }

        // Smooth scroll to the target fieldset after closing the right side
        if ($fieldset.length) {
            $('html, body').animate({
                scrollTop: $fieldset.offset().top - 130
            }, 1000, function () {
                // Flash effect after scrolling
                var originalColor = $fieldset.css('background-color');

                // Flashing effect
                $fieldset.css('background-color', '#3f3c62');
                setTimeout(function () {
                    $fieldset.css('background-color', originalColor); // Revert to original
                }, 250); // Flash duration
                setTimeout(function () {
                    $fieldset.css('background-color', '#3f3c62'); // Flash again
                }, 500); // Time until the second flash
                setTimeout(function () {
                    $fieldset.css('background-color', originalColor); // Revert again
                }, 750); // Revert back to original after the second flash
            });
        }
    });

    /* end */

    
    /************* change style when you click on "Afficher" button  **************/
    
    /* Start */

    $('#displayOnSmallScreen').click(function () {
        // Check the current text of the button before toggling the wrapper
        if ($(this).text() === 'Afficher le formulaire') {
            // If the button says "Afficher le formulaire", we toggle the visibility of the right side wrapper
            $('.rightSideWrapper').addClass('show'); // Show the right side wrapper
            $(this).text('Masquer le formulaire'); // Change the button text to "Masquer le formulaire"

            // Prevent scrolling based on screen width
            if ($(window).width() <= 576) {
                $('body').css('overflow', 'hidden'); // Disable body scrolling
                $('form').css('overflow-y', 'auto'); // Enable vertical scrolling for the right side
            } else if ($(window).width() > 576 && $(window).width() <= 768) {
                $('body').css('overflow-y', 'hidden'); // Enable vertical scrolling on body
                $('form').css('overflow-y', 'auto'); // Enable vertical scrolling for the form
            }
        } else {
            // If the button says "Masquer le formulaire", we toggle the visibility of the right side wrapper
            $('.rightSideWrapper').removeClass('show'); // Hide the right side wrapper
            $(this).text('Afficher le formulaire'); // Change the button text back to "Afficher le formulaire"

            // Allow scrolling again based on screen width
            if ($(window).width() <= 576) {
                $('body').css('overflow', 'auto'); // Enable scrolling on the body
                $('form').css('overflow-y', ''); // Reset overflow for rightSideWrapper
            } else if ($(window).width() > 576 && $(window).width() <= 768) {
                $('body').css('overflow-y', 'hidden'); // Reset overflow for body
                $('form').css('overflow-y', 'auto'); // Reset overflow for form
            }
        }

        $(this).toggleClass('shrink'); // Toggle the shrink class

        // Additional animations for fieldset and other elements when the button is clicked
        if ($(this).hasClass('shrink')) {
            // Smoothly reduce padding and height of fieldset
            $('fieldset').each(function () {
                $(this).data('origPadding', $(this).css('padding')); // Store original padding
                $(this).data('origHeight', $(this).height()); // Store original height

                $(this).animate({
                    padding: '15px', // Reduce padding
                    height: 'auto' // Shrink height if necessary (auto allows height adjustment based on content)
                }, 500);
            });

            // Apply shrink-specific padding to .printSection
            $('.printSection').each(function () {
                $(this).data('origPadding', $(this).css('padding')); // Store original padding
                $(this).animate({
                    padding: '30px 15px' // Apply the shrink padding
                }, 500);
            });

            // Smoothly reduce font-size of legend
            $('legend').each(function () {
                $(this).data('origFontSize', $(this).css('font-size')); // Store original font-size
                $(this).animate({
                    'font-size': '17px', // Reduce font size
                    'padding': '0px 10px'
                }, 500);
            });

            // Hide the second and last columns with smooth transition
            $('td:nth-child(2), td:last-child, th:nth-child(2), th:last-child').each(function () {
                $(this).data('origWidth', $(this).width()); // Store original width
                $(this).data('origPadding', $(this).css('padding')); // Store original padding
                $(this).data('origFontSize', $(this).css('font-size')); // Store original font-size

                // Animate the hiding of columns smoothly
                $(this).css({
                    'overflow': 'hidden', // Hide overflow to prevent content visibility
                    'display': 'table-cell' // Ensure it is treated as a table cell during animation
                }).animate({
                    width: '0', // Collapse the width
                    padding: '0', // Remove padding
                    'font-size': '0', // Hide content
                    opacity: 0 // Fade out smoothly
                }, 500, function () {
                    $(this).css('display', 'none'); // Set display to none after animation to remove space
                });
            });

            // Reduce the left side wrapper
            $('.leftSideWrapper').addClass('reduce');
        } else {
            // Smoothly restore padding and height of fieldset
            $('fieldset').each(function () {
                $(this).animate({
                    padding: $(this).data('origPadding'), // Restore original padding
                    height: $(this).data('origHeight') // Restore original height
                }, 500);
            });

            // Restore the original padding for .printSection
            $('.printSection').each(function () {
                $(this).animate({
                    padding: $(this).data('origPadding') // Restore original padding
                }, 500);
            });

            // Smoothly restore font-size of legend
            $('legend').each(function () {
                $(this).animate({
                    'font-size': $(this).data('origFontSize') // Restore original font-size
                }, 500);
            });

            // Show the second and last columns with smooth transition
            $('td:nth-child(2), td:last-child, th:nth-child(2), th:last-child').each(function () {
                $(this).css('display', 'table-cell'); // Set display to table-cell to start the animation

                // Animate the restoration of columns smoothly
                $(this).animate({
                    width: $(this).data('origWidth'), // Restore original width
                    padding: $(this).data('origPadding'), // Restore original padding
                    'font-size': $(this).data('origFontSize'), // Restore original font-size
                    opacity: 1 // Fade in smoothly
                }, 500, function () {
                    $(this).css('overflow', ''); // Reset overflow property after animation
                });
            });

            // Restore the left side wrapper width
            $('.leftSideWrapper').removeClass('reduce');
        }
    });


    /* End */



});   /* Jquery close */
