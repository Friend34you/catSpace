$(document).ready(function() {
    $('.burger-button').click(function() {
        $(".left-item").toggleClass('item-active')
        $(".right-item").toggleClass('item-active');
    });
});