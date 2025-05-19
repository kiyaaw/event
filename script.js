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
        document.getElementById("text").innerText = "tim a menang";
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
        document.getElementById("text").innerText = "tim b menang";
    }
}

function ubahtext (){
    const text = document.getElementById("teamA");
    let newtext = prompt ("masukkan text baru:");

    text.innerText = newtext;
}

function chaging(){
    const text2 = document.getElementById("teamB");
    let textbaru = prompt ("masukkan text baru:");
    
    text2.innerText = textbaru; 
}

function reset(){
    p1display.innerText = 0;
    p1display.style.color = "black";

    p2display.innerText = 0;
    p2display.style.color = "black";

    document.getElementById("text").innerText = "";
}
