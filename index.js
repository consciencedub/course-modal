function updateCountdown() {
    // 50 is the max message length
    var remaining = 50 - jQuery('.message').val().length;
    jQuery('.countdown').text(remaining + ' char. left');
}
jQuery(document).ready(function($) {
    updateCountdown();
    $('.message').change(updateCountdown);
    $('.message').keyup(updateCountdown);
});