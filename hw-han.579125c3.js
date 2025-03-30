// Завдання 1: 
document.getElementById("startHourButton").addEventListener("click", startHourTimer);
function startHourTimer() {
    let timeLeft = 60;
    let interval = setInterval(()=>{
        document.getElementById("hourTimerMessage").textContent = `\u{417}\u{430}\u{43B}\u{438}\u{448}\u{438}\u{43B}\u{43E}\u{441}\u{44C}: ${timeLeft} \u{445}\u{432}\u{438}\u{43B}\u{438}\u{43D}`;
        if (timeLeft === 30) alert("\u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u043C\u0435\u043D\u0448\u0435 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0438 \u0447\u0430\u0441\u0443!");
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
    let interval = setInterval(()=>{
        document.getElementById("secondTimerMessage").textContent = `\u{417}\u{430}\u{43B}\u{438}\u{448}\u{438}\u{43B}\u{43E}\u{441}\u{44C}: ${(timeLeft / 1000).toFixed(1)} \u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}`;
        if (timeLeft <= 10000) animateEffect();
        if (timeLeft <= 0) {
            clearInterval(interval);
            startButton.disabled = false;
        }
        timeLeft -= 10;
    }, 10);
}
function animateEffect() {
    document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

//# sourceMappingURL=hw-han.579125c3.js.map
