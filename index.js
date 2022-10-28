


let homeEl = document.getElementById("count-home-el-score")
let count = 0
let guestEl = document.getElementById("count-guest-el-score")
let guestCount = 0

function plusOne() {  
    count += 1
    homeEl.innerText = count  
}

function plusTwo() { 
    count += 2
    homeEl.innerText = count  
}

function plusThree() {  
    count += 3
    homeEl.innerText = count   
}

function plusOneGuest() { 
    guestCount += 1
    guestEl.innerText = guestCount  
}

function plusTwoGuest() {  
    guestCount += 2
    guestEl.innerText = guestCount  
}

function plusThreeGuest() { 
    guestCount += 3
    guestEl.innerText = guestCount 
}

function newGame() {
    homeEl.textContent = 0
    count = 0

    guestEl.textContent = 0
    guestCount = 0
}



