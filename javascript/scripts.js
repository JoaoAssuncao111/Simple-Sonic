const sonicModel = document.querySelector('.sonic')
let crabModel = document.querySelector('.crab')
const cloudModel = document.querySelector('.background')
let scoreElement = document.getElementById('score')
let gameOverScreenElement = document.getElementById('gameOverScreen')

let score = 0
const jumpDelay = 500
//Lowest value crab's speed can have
const minimumCrabSpeed = 0.70
const maxCrabSpeed = 1
const isGameOver = false

document.addEventListener('keydown',jump)

function startGame(){
    location. reload()
}

function restartGame(){
    location. reload()
    gameOverScreenElement.style.display = 'none'
}

function jump(){
    sonicModel.src = './resources/sonic_jump.gif';
    sonicModel.style.width = 150
    sonicModel.classList.add('jump');

    document.removeEventListener('keydown',jump)
    setTimeout(() => {
        sonicModel.classList.remove('jump');
        if(!isGameOver){
        sonicModel.src = './resources/Sonic.gif';
        document.addEventListener('keydown',jump)
        }
    }, jumpDelay);
    
}


const checkDeath = setInterval(() => {

    let crabHitbox = crabModel.offsetLeft;
    //Converting sonic height from string to numeral value
    const sonicHitbox = +window.getComputedStyle(sonicModel).bottom.replace('px', '')
    //End game condition, if crab hits sonic game ends
    if (crabHitbox <= 135 && sonicHitbox < 65 && crabHitbox > 0){
        gameOverScreenElement.style.display = 'block'
        crabModel.style.animation = 'none'
        crabModel.style.left = `${crabHitbox}px`
        sonicModel.style.animation = 'none'
        sonicModel.style.bottom= `${sonicHitbox}px`
        sonicModel.src = './resources/sonic_death.gif'
        sonicModel.style.width = '120px'
        sonicModel.style.marginLeft = '30px'
        document.removeEventListener('keydown',jump)
    
        isGameOver = true
        
        clearInterval(checkDeath)

    }


},10)


//TODO: Fix random animation speed for every crab spawn
function setRandomAnimationDuration() {
    crabModel.style.animationDuration = Math.random() * (maxCrabSpeed - minimumCrabSpeed) + minimumCrabSpeed + "s";
  }
  
  crabModel.onanimationiteration = () => {
    //setRandomAnimationDuration() TODO Debug crabs spawning mid-screen. 
    //Each time a crab leaves the screen the score increments
    scoreElement.innerHTML = "Score: " + ++score

    }




