const url = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"

$('document').ready(function () {
    $.getJSON(url, function (data) {
        console.log('yusssss' + data.text)
        $('#fact').text(`"${data.text}"`);
    })
});

