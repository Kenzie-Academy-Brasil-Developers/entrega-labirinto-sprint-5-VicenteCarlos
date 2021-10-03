const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",                     
];

const main = document.getElementById("container");
const figure = document.querySelector(".vitoria")

let eX = 0;
let eY = 9;

for (let i=0;i<map.length;i++) {
    for (let j=0;j<map[i].length;j++) {
        if (map[i][j] === "W") {
            let parede = document.createElement("div");
            parede.classList.add("parede");
            parede.style.top = `${i*40}px`
            parede.style.left = `${j*40}px`
            main.appendChild(parede);
        } else if (map[i][j] === "S") {
            
            let start = document.createElement("div");
            start.classList.add("start");
            start.style.top = `${i*40}px`
            start.style.left = `${j*40}px`
            main.appendChild(start);
            

            jogador = document.createElement("div");
            jogador.classList.add("jogador");
            start.appendChild(jogador);

        } else if (map[i][j] === "F") {
            let end = document.createElement("div");
            end.classList.add("end");
            end.style.top = `${i*40}px`
            end.style.left = `${j*40}px`
            main.appendChild(end);
        }
    }
}

//Movimentação do jogador

let boxLeft = 10, boxTop = 10;

document.addEventListener("keydown", event => {
    let getKeyboard = event.key;
    if (getKeyboard === "ArrowRight") {
        boxLeft += 40;
        eX += 1;
        if (map[eY][eX]==="W") {
            boxLeft -= 40;
            eX -= 1;
        } else if (map[eY][eX]==="F")  {
            figure.style.display = "initial"
        } else if (map[eY][eX]===map[8][21]) {
            boxLeft -= 40;
            eX -= 1;
        }
        jogador.style.left = `${boxLeft}px`
    } else if (getKeyboard === "ArrowLeft") {
        boxLeft -= 40;
        eX -= 1;
        if (map[eY][eX]==="W") {
            boxLeft += 40;
            eX += 1;
        } else if (map[eY][eX]===map[9][-1]) {
            boxLeft += 40;
            eX += 1;
        }
        jogador.style.left = `${boxLeft}px`
    }
})

document.addEventListener("keydown", event => {
    let getKeyboard = event.key;
    if (getKeyboard === "ArrowDown") {
        boxTop += 40;
        eY += 1;
        if (map[eY][eX]==="W") {
            boxTop -= 40;
            eY -= 1;
        }
        jogador.style.top = `${boxTop}px`
    } else if (getKeyboard === "ArrowUp") {
        boxTop -= 40;
        eY -= 1;
        if (map[eY][eX]==="W") {
            boxTop += 40;
            eY += 1;
        }
        jogador.style.top = `${boxTop}px`
    }
})



