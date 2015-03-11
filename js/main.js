var $showHide = $('.btn-show-hide');
var $box = $('.box');

$showHide.on('click', function () {
    $box.toggleClass('js-box');
})

var $move = $('.btn-move');
var $diamond = $('.diamond');

$move.on('click', function () {
    $diamond.toggleClass('move');
})