/*let add1 = document.getElementById("add1Home")
let add2 = document.getElementById("add2Home")
let add3 = document.getElementById("add3Home")*/

/**
 * OPTIONAL TO THE TASK => to ADD ONLICK FUNCTION to the New Game button, so New Game button reset the displays to 0
 */
let screenDisplayScoreHome = document.getElementById("screenScoreHome")
let screenDisplayScoreGuest = document.getElementById("screenScoreGuest")

let screenScoreHome = 0
let screenScoreGuest = 0


function add1Point() {
    screenScoreHome += 1
    screenDisplayScoreHome.textContent = screenScoreHome
}

function add2Point() {
    screenScoreHome += 2
    screenDisplayScoreHome.textContent = screenScoreHome
    
}

function add3Point() {
    screenScoreHome += 3
    screenDisplayScoreHome.textContent = screenScoreHome
    
}

function add1PointGuest() {
    screenScoreGuest += 1
    screenDisplayScoreGuest.textContent = screenScoreGuest
    
}

function add2PointGuest() {
    screenScoreGuest += 2
    screenDisplayScoreGuest.textContent = screenScoreGuest
}

function add3PointGuest() {
    screenScoreGuest += 3
    screenDisplayScoreGuest.textContent = screenScoreGuest
}
