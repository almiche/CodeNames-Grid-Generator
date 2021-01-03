$( document ).ready(function() {
    // Handler for .ready() called.
    function createField(){
        $(`td`).css("background-color","white");
        var counter = 0;
        var previous_values = new Set();
        var startingTeam = Math.round(Math.random());
        
        var startingTeamColor = "#1e88e5";
        var otherTeamColor = "#d32f2f";
        if (startingTeam == 1){
            [startingTeamColor, otherTeamColor] = [otherTeamColor, startingTeamColor];
        }
        $("#grid").css("border-color",startingTeamColor);

        while (counter < 18 ){
            var random = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
            if (!previous_values.has(random)){
                if (counter < 8){
                    $(`#${random}`).css("background-color",otherTeamColor);
                }
                else if (counter > 8 && counter < 25){
                    $(`#${random}`).css("background-color",startingTeamColor);
                }
                else {
                    $(`#${random}`).css("background-color","grey");
                }
                previous_values.add(random)
                counter++;
            }
        }
    }

    var intervalId = setInterval(createField,150);

    $("#generate").on("click",function(){
        clearInterval(intervalId);
        createField();
    })
});