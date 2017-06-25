'use strict';
$(document).ready(function () {
    $('.close').click(function () {
        $('.translated-string, .buttons__shares, .lower').addClass('hidden');
        $('#textarea, .buttons__translate, .higher').removeClass('hidden');
    })
})


/**
 * Translate the string to morse code
 */
function getStrTranslate() {
    var convertedMorse = [];
    var morseCode;
    // Get JSON file
    $.getJSON("js/morse.json", function (json) {
        // Get the value of the text area
        var str = document.getElementById('textarea');
        var morseStr = str.value;
        for (var i = 0, j = morseStr.length; i < j; i++) {
            json.forEach(function (value, key) {
                if (value.Letter == morseStr[i].toUpperCase()) {
                    convertedMorse.push(value.Morse);
                }
            })
        }
        morseCode = convertedMorse.join('');
        $('.translated-string').html(morseCode);
        $('.translated-string, .buttons__shares, .lower').removeClass('hidden');
        $('#textarea, .buttons__translate, .higher').addClass('hidden');

    });
}
