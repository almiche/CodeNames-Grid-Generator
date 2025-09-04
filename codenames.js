document.addEventListener('DOMContentLoaded', function() {
    function createField() {
        document.querySelectorAll('td').forEach(td => {
            td.style.backgroundColor = "white";
        });

        let counter = 0;
        let previous_values = new Set();
        let startingTeam = Math.round(Math.random());

        let startingTeamColor = "#1e88e5";
        let otherTeamColor = "#d32f2f";
        if (startingTeam === 1) {
            [startingTeamColor, otherTeamColor] = [otherTeamColor, startingTeamColor];
        }
        document.getElementById("grid").style.borderColor = startingTeamColor;

        while (counter < 18) {
            let random = Math.floor(Math.random() * 25) + 1;
            if (!previous_values.has(random)) {
                if (counter < 8) {
                    document.getElementById(random.toString()).style.backgroundColor = otherTeamColor;
                } else if (counter > 8 && counter < 17) {
                    document.getElementById(random.toString()).style.backgroundColor = startingTeamColor;
                } else {
                    document.getElementById(random.toString()).style.backgroundColor = "grey";
                }
                previous_values.add(random);
                counter++;
            }
        }
    }

    let intervalId = setInterval(createField, 150);

    document.getElementById("generate").addEventListener("click", function() {
        clearInterval(intervalId);
        createField();
    });
});