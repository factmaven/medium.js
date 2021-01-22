$(function () {
    // init feather icons
    feather.replace();

    // Display Current Year 
    document.getElementById('current-year').innerHTML = dayjs().format('YYYY');
});