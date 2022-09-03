const sonicModel = document.querySelector('.sonic')
const crabModel = document.querySelector('.crab')

const jumpDelay = 500
document.addEventListener('keydown',jump)

function jump(){
    sonicModel.src = './resources/sonic_jump.gif';
    sonicModel.classList.add('jump');
    document.removeEventListener('keydown',jump)
    setTimeout(() => {
        sonicModel.classList.remove('jump');
        sonicModel.src = './resources/Sonic.gif';~~
        document.addEventListener('keydown',jump)
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
        
        clearInterval(checkDeath)

    }
    

},10)



