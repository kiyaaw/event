let maxscore = 3;

function addScore (){
    const player1display = document.getElementById("p1display");
    const player2display = document.getElementById("p2display");

    let lastnumber = player1display.textContent

    let totalscorep1 = Number (lastnumber) + 1;
    player1display.textContent = totalscorep1;
    
    if (totalscorep1 == maxscore) {
        player1display.style.color = "green";
        player2display.style.color = "red";

    }
}

function addScorep2 (){
    const player1display = document.getElementById("p1display");
    const player2display = document.getElementById("p2display");

    let lastnumber = player2display.textContent

    let totalscorep2 = Number (lastnumber) + 1;
    player2display.textContent = totalscorep2;
    
    if (totalscorep2 == maxscore) {
        player1display.style.color = "red";

        player2display.style.color = "green";

    }
}

function ubahtext (){
    const text = document.getElementById("teamA");
    let newtext = prompt ("masukkan text baru:");

    let newesttext = text.innerText = newtext;
}

function changing (){
    const textt = document.getElementById("teamB");
    let newtextt = prompt ("masukkan text baru:");

    let newesttextt = textt.innerText = newtextt;
}