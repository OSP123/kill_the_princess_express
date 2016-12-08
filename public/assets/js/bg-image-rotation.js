jQuery(document).ready(function() {
    var img_array = [3, 1, 2],
        index = 0,
        interval = 5000;

    // Background Image Rotation    
    (function changeBg() {

        index = (index + 1) % img_array.length;

        $('body').css('backgroundImage', function () {
            setTimeout(function () {
            }, 3000);
            return 'url(/assets/img/city_' + img_array[index] + '.jpg)';
        });
        setTimeout(changeBg, interval);
    })();
});