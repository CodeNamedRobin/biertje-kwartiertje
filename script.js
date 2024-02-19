const countdownElement = document.getElementById('countdown');
const messageElement = document.getElementById('message');
let countdownTimer;

let minutesTimer = .5;
let minutesMessage = 1;

function startCountdown(duration, reset = false) {
    let timer = duration, minutes, seconds;

    // Reset countdown styling if coming from showMessage
    if (reset) {
        countdownElement.style.position = 'absolute';
        countdownElement.style.top = '50%';
        countdownElement.style.left = '50%';
        countdownElement.style.transform = 'translate(-50%, -50%)';
        countdownElement.style.fontSize = '3em'; // Reset font size
    }

    countdownTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(countdownTimer);
            showMessage();
        }
    }, 1000);
}

function showMessage() {
    // Move and resize countdown for message display
    countdownElement.style.position = 'fixed';
    countdownElement.style.top = '10px';
    countdownElement.style.left = '10px';
    countdownElement.style.transform = 'none';
    countdownElement.style.fontSize = '1em'; // Smaller font size

    countdownElement.style.display = 'block';
    messageElement.style.display = 'block';
    messageElement.textContent = "Get beer at the bar!";

    setTimeout(function () {
        messageElement.style.display = 'none';
        startCountdown(minutesTimer * 60, true); // Reset countdown with style reset
    }, minutesMessage * 60000); // Show message for 1 minute
}

// Initial countdown start
startCountdown(minutesTimer * 60);
