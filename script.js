console.log('henlo');


const play=document.getElementById('play'); 
const sound=document.getElementById('whoosh');
console.log(sound);

const otherSound=new Audio('whoosh.wav');
const thirdSound=new Audio('whoosh.wav');
const fourthSound=new Audio('whoosh.wav');


play.addEventListener('click', function(){
    sound.play();
    console.log('whoosh!');    
    repeatSound();
})

const repeatSound=function(){
    setInterval(() => {
        console.log('whsh again');
    sound.play();
    otherSound.play();
    thirdSound.play();
    fourthSound.play();
    console.log(sound.currentTime);

    }, 2000);
}
