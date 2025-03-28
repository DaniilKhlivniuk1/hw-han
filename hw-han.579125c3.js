let count = 0;
const interval = setInterval(()=>{
    console.log(`\u{41F}\u{43E}\u{432}\u{456}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{43D}\u{44F} ${count + 1}`);
    count++;
    if (count === 5) {
        clearInterval(interval);
        console.log("\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u0437\u0443\u043F\u0438\u043D\u0435\u043D\u043E");
    }
}, 1000);
let position = 50;
let size = 50;
const animate = setInterval(()=>{
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
const gameTimer = setInterval(()=>{
    gameTime--;
    if (gameTime === 0) {
        clearInterval(gameTimer);
        button.disabled = true;
        alert(`\u{413}\u{440}\u{430} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{430}! \u{412}\u{430}\u{448}\u{456} \u{43E}\u{447}\u{43A}\u{438}: ${score}`);
    }
}, 1000);
button.addEventListener("click", ()=>{
    score++;
    scoreDisplay.textContent = `\u{41E}\u{447}\u{43A}\u{438}: ${score}`;
});
document.getElementById("startTimer").addEventListener("click", ()=>{
    const seconds = parseInt(document.getElementById("timeInput").value);
    if (isNaN(seconds) || seconds <= 0) return alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044C gjpbnbdyt \u0447\u0438\u0441\u043B\u043E!");
    let remainingTime = seconds;
    document.getElementById("countdown").textContent = `\u{417}\u{430}\u{43B}\u{438}\u{448}\u{438}\u{43B}\u{43E}\u{441}\u{44C}: ${remainingTime} \u{441}\u{435}\u{43A}.`;
    const countdownInterval = setInterval(()=>{
        remainingTime--;
        document.getElementById("countdown").textContent = `\u{417}\u{430}\u{43B}\u{438}\u{448}\u{438}\u{43B}\u{43E}\u{441}\u{44C}: ${remainingTime} \u{441}\u{435}\u{43A}.`;
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            alert("\u0427\u0430\u0441 \u0432\u0438\u0439\u0448\u043E\u0432!");
            document.getElementById("countdown").textContent = "";
        }
    }, 1000);
});

//# sourceMappingURL=hw-han.579125c3.js.map
