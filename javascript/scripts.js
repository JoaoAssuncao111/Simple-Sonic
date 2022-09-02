const sonicModel = document.querySelector('.sonic');
const crabModel = document.querySelector('.crab')

const jumpDelay = 500


function jump(){
    sonicModel.classList.add('jump');
    setTimeout(() => {
        sonicModel.classList.remove('jump');
    }, jumpDelay);
    
}


const checkDeath = setInterval(() => {
    const crabHitbox = crabModel.offsetLeft;

    if (crabHitbox <= 135 && sonicModel){
        crabModel.style.animation = 'none'
        crabModel.style.left = `${crabHitbox}px`

    }

},10)

document.addEventListener('keydown',() => jump);