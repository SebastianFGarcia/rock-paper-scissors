let cpu
let player = 0
let countCPU = 0
let countPlayer = 0
let salio = true

function textVersus(jugador) {
    if (jugador == 1)  return "Rock"
    else if (jugador == 2) return "Paper"
    else if (jugador == 3) return "Scissors"
}

function Versus(jugador, cpu) {
    if (jugador == cpu) return "Draw"
    else if (jugador == 1 && cpu == 2) return "CPU win!" + countCPU++
    else if (jugador == 1 && cpu == 3) return "Player win!" + countPlayer++
    else if (jugador == 2 && cpu == 1) return "Player win!" + countPlayer++
    else if (jugador == 2 && cpu == 3) return "CPU win!" + countCPU++
    else if (jugador == 3 && cpu == 1) return "CPU win!" + countCPU++
    else if (jugador == 3 && cpu == 2) return "Player win!" + countPlayer++
}
function salir(jugador,numero) {
    if (numero == 3) {
        salio = false
        alert(jugador+" wins the game!")
    }
}


while (salio) {
    cpu = Math.floor(Math.random() * 3) + 1

    player = parseInt(prompt("1. Rock\n2. Paper\n3. Scissors"))

    let result = (textVersus(player) + " vs " + textVersus(cpu))
    alert(result)
    alert(Versus(player, cpu))
    alert("Player: " + countPlayer + " CPU: " + countCPU)

    salir("Player",countPlayer)
    salir('CPU',countCPU)
}