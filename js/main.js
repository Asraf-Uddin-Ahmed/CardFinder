
var initializeGame = function () {
    var totalCard = 101;
    var needInit = false;
    var select = Math.floor(Math.random() * 52);

    $('#cardDiv').empty();
    for (var I = 0; I < totalCard; I++) {
        var no;
        if (I % 9 == 0)
            no = select;
        else
            no = (I % 52);
        var path = "image\\cards\\" + no + ".png";
        $('#cardDiv').append("<img src='" + path + "' alt='card'>" + I + " </img>");
    }

    $("#resultDiv").hide();
    $("#resultText").hide();
    $("#resultCard").hide();

    $("#instructionDiv").show();
    return select;
}

$(function () {

    var select = initializeGame();

    $("#OK").click(function () {
        $("#instructionDiv").hide();

        var path = "image\\cards\\" + select + ".png";
        $("#resultCard").attr("src", path);

        $("#resultDiv").show();
        $("#resultText").show(1000, function () {
            $("#resultCard").show(500);
        });
    });

    $("#restart").click(function () {
        $('#cardDiv').hide(500, function () {
            select = initializeGame();
            $('#cardDiv').show(500);
        });
    });

    $("#close").click(function () {
        chrome.app.window.current().close();
    });
});