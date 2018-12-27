$( document ).ready(function() {
    // Handler for .ready() called.
    function createField(){
        $(`td`).css("background-color","white");
        var counter = 0;
        var previous_values = new Set();
        var startingTeam = Math.round(Math.random());

        if (startingTeam == 1){
            $("#grid").css("border-color","#d32f2f");
        }else{
            $("#grid").css("border-color","#1e88e5");
        }

        while (counter < 18 ){
            var random = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
            if (!previous_values.has(random)){
                if (counter < 8){
                    $(`#${random}`).css("background-color","#d32f2f");
                }
                else if (counter > 8 && counter < 25){
                    $(`#${random}`).css("background-color","#1e88e5");
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