const sonicModel = document.querySelector('.sonic')
const crabModel = document.querySelector('.crab')
const cloudModel = document.querySelector('.background')
const score = 0
const jumpDelay = 500
//Lowest value crab's speed can have
const minimumCrabSpeed = 0.75 
const isGameOver = false
document.addEventListener('keydown',jump)

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

    const crabHitbox = crabModel.offsetLeft;
    //Converting sonic height from string to numeral value
    const sonicHitbox = +window.getComputedStyle(sonicModel).bottom.replace('px', '')
    //End game condition, if crab hits sonic game ends
    if (crabHitbox <= 135 && sonicHitbox < 65 && crabHitbox > 0){

        crabModel.style.animation = 'none'
        crabModel.style.left = `${crabHitbox}px`
        sonicModel.style.animation = 'none'
        sonicModel.style.bottom= `${sonicHitbox}px`

        sonicModel.src = './resources/sonic_death.gif'
        sonicModel.style.width = '120px'
        sonicModel.style.marginLeft = '30px'
        document.removeEventListener('keydown',jump)
        //to fix: Clouds reset on death
        cloudModel.style.animation = 'none'
    

        isGameOver = true
        
        clearInterval(checkDeath)

    }


},10)


//TODO: Fix random animation speed for every crab spawn
function setRandomAnimationDuration() {
    crabModel.style.animationDuration = Math.random() * (0.75 - minimumCrabSpeed) + minimumCrabSpeed + "s";
  }
  
  crabModel.addEventListener('animationstart', setRandomAnimationDuration(),false)
  crabModel.onanimationiteration = () => {score++}



