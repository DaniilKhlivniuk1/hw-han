let count = 0;
const interval = setInterval(() => {
    console.log(`Повідомлення ${count + 1}`);
    count++;
    if (count === 5) {
        clearInterval(interval);
        console.log("Інтервал зупинено");
    }
}, 1000);

let position = 50;
let size = 50;
const animate = setInterval(() => {
    position += 10;
    size += 5;
    document.getElementById("box").style.left = position + "px";
    document.getElementById("box").style.width = size + "px";
    document.getElementById("box").style.height = size + "px";
    if (position > 300) clearInterval(animate);
}, 100);

let score = 0;
let gameTime = 10;
const button = document.getElementById("clickMe");
const scoreDisplay = document.getElementById("score");
const gameTimer = setInterval(() => {
    gameTime--;
    if (gameTime === 0) {
        clearInterval(gameTimer);
        button.disabled = true;
        alert(`Гра завершена! Ваші очки: ${score}`);
    }
}, 1000);
button.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = `Очки: ${score}`;
});

document.getElementById("startTimer").addEventListener("click", () => {
    const seconds = parseInt(document.getElementById("timeInput").value);
    if (isNaN(seconds) || seconds <= 0) return alert("Введіть gjpbnbdyt число!");
    
    let remainingTime = seconds;
    document.getElementById("countdown").textContent = `Залишилось: ${remainingTime} сек.`;
    
    const countdownInterval = setInterval(() => {
        remainingTime--;
        document.getElementById("countdown").textContent = `Залишилось: ${remainingTime} сек.`;
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            alert("Час вийшов!");
            document.getElementById("countdown").textContent = "";
        }
    }, 1000);
});
