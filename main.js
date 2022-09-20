let cpu
let player = 0
let countCPU = 0
let countPlayer = 0
let salio = true
while (salio) {
    cpu = Math.floor(Math.random() * 3) + 1
    player = parseInt(prompt("1. Rock\n2. Paper\n3. Scissors"))
    let result = ""
    if (player == 1) {
        result = "Rock"
    } else if (player == 2) {
        result = "Paper"
    } else if (player == 3) {
        result = "Scissors"
    }
    if (cpu == 1) {
        result += " vs Rock"
    } else if (cpu == 2) {
        result += " vs Paper"
    } else if (cpu == 3) {
        result += " vs Scissors"
    }
    alert(result)
    if (cpu == 1 && player == 2) {
        countPlayer++
        alert('Player win!' + ' CPU: ' + countCPU + 'Player: ' + countPlayer)
    } else if (cpu == 1 && player == 3) {
        countCPU++
        alert('CPU win!' + ' CPU: ' + countCPU + 'Player: ' + countPlayer)
    } else if (cpu == 2 && player == 1) {
        countCPU++
        alert('CPU win!' + ' CPU: ' + countCPU + 'Player: ' + countPlayer)
    }
    else if (cpu == 2 && player == 3) {
        countPlayer++
        alert('Player win!' + ' CPU: ' + countCPU + 'Player: ' + countPlayer)
    }
    else if (cpu == 3 && player == 1) {
        countPlayer++
        alert('Player win!' + ' CPU: ' + countCPU + 'Player: ' + countPlayer)
    }
    else if (cpu == 3 && player == 2) {
        countCPU++
        alert('CPU win!' + ' CPU: ' + countCPU + 'Player: ' + countPlayer)
    }
    else if (cpu == player) {
        alert('Draw!' + ' CPU: ' + countCPU + 'Player: ' + countPlayer)
    }
    if (countCPU == 3) {
        alert('CPU win the game!')
        salio = false
    }
    else if (countPlayer == 3) {
        alert('Player win the game!')
        salio = false
    }
}