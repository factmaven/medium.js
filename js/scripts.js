$(function () {
    // init feather icons
    feather.replace();
});

(function ($) {
    // Display Current Year 
    document.getElementById('current-year').innerHTML = dayjs().format('YYYY');
})(jQuery);