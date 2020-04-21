function updateCountdown() {
    // 50 is the max message length
    var remaining = 50 - jQuery('.message').val().length;
    jQuery('.countdown').text(remaining + ' char. left');
}
jQuery(document).ready(function($) {
    updateCountdown();
    $('.message').change(updateCountdown);
    $('.message').keypress(updateCountdown);
});

$("#create").click(function(){
    alert("A New Course Has Been Created!");
    $(this).css("background", "gray");
    
  });

// function updateCountdown() {
//     // 50 is the max message length
//     var remaining = 50 - jQuery('.message').val().length;
//     jQuery('.countdown').text(remaining + ' char. left');
// }
// jQuery(document).ready(function($) {
//     updateCountdown();
//     $('.message').change(updateCountdown);
//     $('.message').keyup(updateCountdown);
// });


// var maxLength = 50;
// $('textarea').keyup(function() {
//   var length = $(this).val().length;
//   var length = maxLength-length;
//   $('#chars').text(length);
// });