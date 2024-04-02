const startBtnEl = document.getElementById('start-btn');
const audio = new Audio('img/hbdAudio.mp3');

startBtnEl.addEventListener('click', function (){

    audio.play();


    startBtnEl.style.transition = "opacity 1s ease";
    startBtnEl.style.opacity = "0";

    setTimeout(function() {
        startBtnEl.style.display = "none";
    }, 1000); 


    setTimeout(function() {
        document.body.style.transition = "background-image 2s ease";
        document.body.style.backgroundImage = "url('img/hbd-main2.gif')"; 
        document.body.style.backgroundSize = "cover"; 
        document.body.style.backgroundPosition = "center"; 
        document.body.style.backgroundRepeat = "no-repeat"; 
    }, 1500); 

    setTimeout(function() {
        alert('Wishing you a happy 21st birthday, May all your dreams and wishes come true!. Panjang umur, sehat selalu, sukses kuliahnya, and I love you always <3')
    }, 16000);
});


window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        document.body.style.backgroundSize = "contain";
    } else {
        document.body.style.backgroundSize = "cover";
    }
});
