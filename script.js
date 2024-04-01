const startBtnEl = document.getElementById('start-btn');
const audio = new Audio('img/hbdAudio.mp3'); // Assuming 'audiobd.mp3' is in the same folder as your JavaScript file

startBtnEl.addEventListener('click', function (){
    // Play the sound
    audio.play();

    // Hide the button
    startBtnEl.style.display = "none";

    // Add a delay before showing the image
    setTimeout(function() {
        document.body.innerHTML = ""; // Clears the entire body
        document.body.style.backgroundImage = "url('img/hbd-main2.gif')"; // Changes background image
        document.body.style.backgroundSize = "99%"; // Makes the background image cover the entire body
        document.body.style.backgroundPosition = "center"; // Centers the background image
        document.body.style.backgroundRepeat = "no-repeat"; // Prevents the background image from repeating
    }, 1000); // Change the delay time as needed (1000ms = 1 second)

    setTimeout(function() {
        alert('Wishing you a happy birthday, May all your dreams and wishes come true!. I love you always <3')
    }, 16000);
});

// Adjust background size for smaller screens (e.g., mobile phones)
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        document.body.style.backgroundSize = "contain";
    } else {
        document.body.style.backgroundSize = "cover";
    }
});
