// $(document).ready( function() {
//     console.log( "ready!" );
//     /* Check width on page load*/
//     if ( $(window).width() < 550) {
//         $('#overview-icon').addClass('fa-3x').removeClass('fa-5x');
//     }
//     else {
//         $('#overview-icon').addClass('fa-5x').removeClass('fa-3x');
//     }
// });

$(window).resize(function() {
    var width_size = $(window).width();
    if ( width_size < 550) {
        $('#overview-icon').addClass('fa-3x').removeClass('fa-5x');
    }
    else {
        $('#overview-icon').addClass('fa-5x').removeClass('fa-3x');
    }
});