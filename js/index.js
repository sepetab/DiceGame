let gameState = {
    p1s: 0,
    p2s: 0,
    p1turn: true
}
const displayP1s = document.getElementById('player1Scoreboard')
const displayP2s = document.getElementById('player2Scoreboard')
const p1Dice = document.getElementById('player1Dice') 
const p2Dice = document.getElementById('player2Dice') 
const message = document.getElementById('message')
const rollBtn = document.getElementById('rollBtn')
const resBtn = document.getElementById('resetBtn')

rollBtn.addEventListener('click', () => {
    let roll = Math.floor(Math.random()*6)+1
    if(gameState.p1turn){
        message.textContent = "Player 2 Turn"
        p1Dice.textContent = roll  
        p1Dice.classList.remove('active')
        p2Dice.classList.add('active')
        gameState.p1s += roll
        displayP1s.textContent = gameState.p1s
    }else{
        message.textContent = "Player 1 Turn"
        p2Dice.textContent = roll
        p2Dice.classList.remove('active')
        p1Dice.classList.add('active')
        gameState.p2s+= roll
        displayP2s.textContent = gameState.p2s
    }  
    gameState.p1turn = !gameState.p1turn

    if(gameState.p1s >=20) {
        message.textContent = "Player 1 Won"   
        DisplayReset()
    }else if(gameState.p2s >=20){
        message.textContent = "Player 2 Won"   
        DisplayReset()
    }
})

resBtn.addEventListener("click", () => {
    message.textContent = "Player 1 Turn"
    p1Dice.textContent = "_" 
    p2Dice.textContent = "_"
    gameState.p1s = 0; gameState.p2s = 0; gameState.p1turn = true 
    displayP1s.textContent = "0"
    displayP2s.textContent = "0"
    p2Dice.classList.remove('active')
    p1Dice.classList.add('active')
    DisplayRoll()

})

function DisplayReset(){
    rollBtn.style.display = 'none'
    resBtn.style.display = 'block'
}

function DisplayRoll(){
    resBtn.style.display = 'none'    
    rollBtn.style.display = 'block'
}
