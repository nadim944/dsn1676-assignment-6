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

var $collapse = $('.btn-collapse-expand');
var $panel = $('.panel');

$collapse.on('click', function () {
    $panel.toggleClass('collapse');
})

var $bounce = $('.btn-bounce');
var $circle = $('.circle');

$bounce.on('click', function () {
    $circle.toggleClass('bounce');
})
