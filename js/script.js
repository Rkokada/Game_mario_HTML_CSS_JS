const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');


const jump  =() => {
    mario.classList.add('jump');
    setTimeout(()=> {
        mario.classList.remove('jump');

    },500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    
    if (pipePosition <= 120 && pipePosition >0 && marioPosition < 70){
        pipe.getElementsByClassName.animation = 'none';
        pipe.style.left  = `${pipePosition}px`
        mario.getElementsByClassName.animation = 'none';
        mario.style.bottom  = `${marioPosition}px`
        clouds.getElementsByClassName.animation = 'none';
        clouds.style.left  = `${cloudsPosition}px`

        mario.src='./images/game-over.png';
        mario.style.width='75px'
        mario.style.marginLeft='50px' 

        
    }
}, 10);

document.addEventListener('keydown', jump);
