 let selectedByUser = "none";
       let selectedByComp = "none";
       let winner = "none";
       const outputDiv = document.getElementById('output');

       view()
       function view(){
        document.getElementById('app').innerHTML = `
        <input type="button" class="button" value="trykk her for tunes!" onclick="play()">
    <audio id="audio" src="Pokémon Sun & Moon - Battle Legend Red & Blue Battle Music (HQ).mp3"></audio>
    <img src="charmander.png" onclick="userSelect('fire')">
    <img src="mudkip.png" onclick="userSelect('water')">
    <img src="rowlet.png" onclick="userSelect('grass')">
        `
       }

       function play(){
        var audio = document.getElementById('audio');
        audio.play();
       }

       function showResults(){
        if(winner != "none"){
            outputDiv.innerHTML = `
            Du valgte ${selectedByUser} - modstanderen din valgte ${selectedByComp} <br>
            ${winner} vant!
            `;
        }
    }

    function userSelect(selected){
        selectedByUser = selected;
        computerSelect();
    }

    function computerSelect(){
        let randomChoice = Math.floor(Math.random()*3)+1;
        if(randomChoice == 1) selectedByComp = "fire";
        if(randomChoice == 2) selectedByComp = "water";
        if(randomChoice == 3) selectedByComp = "grass";
        checkWinner();
    }

    function checkWinner(){
        if(selectedByUser == "fire" && selectedByComp == "grass"
        ||selectedByUser == "water" && selectedByComp == "fire"
        ||selectedByUser == "grass" && selectedByComp == "water"){
            winner = "Du";
        }
        if(selectedByComp == "fire" && selectedByUser == "grass"
        ||selectedByComp == "water" && selectedByUser == "fire"
        ||selectedByComp == "grass" && selectedByUser == "water"){
        winner = "Motstander"
    }
    if(selectedByUser != "none" && selectedByUser == selectedByComp){
        winner = "Ingen";
    }
    showResults()
} view();