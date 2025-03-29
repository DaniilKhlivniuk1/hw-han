// Завдання 1: 
document.getElementById("startHourButton").addEventListener("click", startHourTimer);
function startHourTimer() {
    let timeLeft = 60; 
    let interval = setInterval(() => {
        document.getElementById("hourTimerMessage").textContent = `Залишилось: ${timeLeft} хвилин`;
        if (timeLeft === 30) alert("Залишилось менше половини часу!");
        if (timeLeft === 0) clearInterval(interval);
        timeLeft--;
    }, 60000);
}

// Завдання 2: 
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startSecondTimer);

function startSecondTimer() {
    let timeLeft = 30000; 
    startButton.disabled = true; 

    let interval = setInterval(() => {
        document.getElementById("secondTimerMessage").textContent = `Залишилось: ${(timeLeft / 1000).toFixed(1)} секунд`;

        if (timeLeft <= 10000) animateEffect();
        if (timeLeft <= 0) {
            clearInterval(interval);
            startButton.disabled = false; 
        }
        timeLeft -= 10;
    }, 10);
}

function animateEffect() {
    document.body.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
}