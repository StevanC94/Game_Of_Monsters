//Golbal Variable
let SelectAttack
let SelectAttackRandom
let LifeOfPlayer = 3
let LifeOfMachine = 3

function StartGame(){
    //Hide monster attack section 
    let selectionAttack = document.getElementById('Select_Power')
    selectionAttack.style.display = 'none'
    //Hide restart game
    let selectionRestart = document.getElementById('RestartText')
    selectionRestart.style.display = 'none' 
    //Game Buttons
    let ButtonMonsterPlayer =  document.getElementById('ButtonMonster')
    ButtonMonsterPlayer.addEventListener('click',SelectMonsterPlayer) 
    let ButtonFire = document.getElementById('ButtonFire')
    ButtonFire.addEventListener('click',AttackfirePlayer)
    let ButtonWhater = document.getElementById('ButtonWhater')
    ButtonWhater.addEventListener('click',AttackWhaterPlayer)
    let ButtonEart = document.getElementById('ButtonEart')
    ButtonEart.addEventListener('click',AttackEartPlayer)
    let ButtonAir = document.getElementById('ButtonAir')
    ButtonAir.addEventListener('click',AttackAirPlayer)
    let restartGame = document.getElementById('Restart')
    restartGame.addEventListener('click',ButtonRestartGame)
}
//Funtion,monster selection of player
function SelectMonsterPlayer (){
    //Hide selected monster
    let selectionRestart = document.getElementById('Select_Monster')
    selectionRestart.style.display = 'none'     
    //Show monster attack section
    let selectionAttack = document.getElementById('Select_Power')
    selectionAttack.style.display = 'block'
    //variables of monster 
    let inputRed = document.getElementById('Red')
    let inputBlue = document.getElementById('Blue')
    let inputBrown = document.getElementById('Brown')
    let inputWhite = document.getElementById('White')
    //variable for the text, name of the monster of the player
    let SelectedMonsterPLayer =document.getElementById('NameMonsterPlayer')
    // Selection fo monster with formessage
    if(inputRed.checked){
        SelectedMonsterPLayer.innerHTML = 'Red' 
    }
    else if (inputBlue.checked){
        SelectedMonsterPLayer.innerHTML = 'Blue' 
    }
    else if (inputBrown.checked){
                SelectedMonsterPLayer.innerHTML = 'Brown' 
    }
    else if (inputWhite.checked){
        SelectedMonsterPLayer.innerHTML = 'White' 
    }
    else{
        alert('The player did not select option')
    }   
    
    SelectedMonsterMachine ()
}
//Function, mosnter selection of machine 
function SelectedMonsterMachine(){
    //Random variable for selection of the monster of machine
    let SelectionRandom = randomM(1,4)
    let SelectedMonsterMachine = document.getElementById('NameMonsterMachine')
    // variabe for the text, name of the monster of the machine
    if (SelectionRandom ==1){
        SelectedMonsterMachine.innerHTML = 'Red'
    }
    else if (SelectionRandom ==2){
        SelectedMonsterMachine.innerHTML = 'Blue'
    }
    else if (SelectionRandom ==3){
        SelectedMonsterMachine.innerHTML = 'Blue'
    }
    else {
        SelectedMonsterMachine.innerHTML = 'White'
    }
}
//Funtion of monster random
function randomM(min,max){
    return Math.floor(Math.random()*(max - min +1) + min)
}
//Selection of fire attack 
function AttackfirePlayer (){
    SelectAttack = 'Fire'
    SelectAttackRandomMachine()
}
//Selection of Whater attack
function AttackWhaterPlayer (){
    SelectAttack = 'Whater'
    SelectAttackRandomMachine()
}
//Selection of Eart attack
function AttackEartPlayer (){
    SelectAttack = 'Eart'
    SelectAttackRandomMachine()
}
//Selection of Air attack
function AttackAirPlayer (){
    SelectAttack = 'Air'
    SelectAttackRandomMachine()
}
//Funtion random for machine attack
function SelectAttackRandomMachine (){
    //Random variable
    let AttackRandom = randomM (1,4)
    // variable for the text,name of the attack of the monster of the machine
    if (AttackRandom ==1){
        SelectAttackRandom = 'Fire'
    }
    else if (AttackRandom ==2){
        SelectAttackRandom = 'Whater'
    }
    else if (AttackRandom ==3){
        SelectAttackRandom = 'Eart'
    }
    else {
        SelectAttackRandom = 'Air'
    }

    ResultFight ()
   
}
//Result of the fight between the monsters
function ResultFight (){
    let spanLifePlayer = document.getElementById('LifePlayer')
    let spanLifeMachine = document.getElementById('LifeMachine')

    if (SelectAttack == SelectAttackRandom){
        CreateMessageOfAttacks(" Tie")
    }
    else if(SelectAttack == 'Fire' && SelectAttackRandom == 'Air'){
        CreateMessageOfAttacks(" Win the Player")
        LifeOfMachine --
        spanLifeMachine.innerHTML = LifeOfMachine
    }
    else if (SelectAttack == 'Whater' && SelectAttackRandom == 'Fire'){
        CreateMessageOfAttacks(" Win the Player")
        LifeOfMachine --
        spanLifeMachine.innerHTML = LifeOfMachine
    }
    else if (SelectAttack == 'Eart' && SelectAttackRandom == 'Air'){
        CreateMessageOfAttacks(" Win the Player")
        LifeOfMachine --
        spanLifeMachine.innerHTML = LifeOfMachine
    }
    else if (SelectAttack == 'Air' && SelectAttackRandom == 'Whater'){
        CreateMessageOfAttacks(" Win the Player")
        LifeOfMachine --
        spanLifeMachine.innerHTML = LifeOfMachine
    }
    else{
        CreateMessageOfAttacks(" Win the Machine")
        LifeOfPlayer --
        spanLifePlayer.innerHTML = LifeOfPlayer
    }
    
    ValidationOfTheLifeOfMonster()
}
//Function of create message of the attacks used by the player and the machine
function CreateMessageOfAttacks (ObtainedResult){
    let PrintText = document.createElement('p')
    let SelectionMessage = document.getElementById('menssageAttack')
    PrintText.innerHTML = 'The attack of monster of player was '+ SelectAttack + ' and the attack of monster of machine was ' + SelectAttackRandom + ObtainedResult
    SelectionMessage.appendChild(PrintText)
}
//Function of validate the lives of monster
function ValidationOfTheLifeOfMonster(){
    if (LifeOfPlayer == 0){
        CreateMessageOfTheResultFight (' 😎 The player is the winer !!!! 😎') 
    }
    else if (LifeOfMachine == 0){
        CreateMessageOfTheResultFight (' 🤖 The machine is the winer !!!! 🤖 ') 
    }
}
//Function of obtained result
function CreateMessageOfTheResultFight (ObtainedResultFight){
    let PrintText = document.createElement('p')
    let SelectionMessage = document.getElementById('menssageAttack')
    PrintText.innerHTML = ObtainedResultFight
    SelectionMessage.appendChild(PrintText)
    //Diseable of button
    let ButtonFire = document.getElementById('ButtonFire')
    ButtonFire.disabled = true
    let ButtonWhater = document.getElementById('ButtonWhater')
    ButtonWhater.disabled = true
    let ButtonEart = document.getElementById('ButtonEart')
    ButtonEart.disabled = true
    let ButtonAir = document.getElementById('ButtonAir')
    ButtonAir.disabled = true
    //Show restart game
    let selectionRestart = document.getElementById('RestartText')
    selectionRestart.style.display = 'block' 
}
//Function of restart game
function ButtonRestartGame (){
    location.reload ()
}
//Listening the start of program
window.addEventListener('load',StartGame)