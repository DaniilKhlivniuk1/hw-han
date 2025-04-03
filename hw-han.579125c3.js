class CountdownTimer {
    constructor({ selector, targetDate }){
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerElement = document.querySelector(this.selector);
        this.refs = {
            days: this.timerElement.querySelector('[data-value="days"]'),
            hours: this.timerElement.querySelector('[data-value="hours"]'),
            mins: this.timerElement.querySelector('[data-value="mins"]'),
            secs: this.timerElement.querySelector('[data-value="secs"]')
        };
        this.start();
    }
    start() {
        this.updateTimer();
        this.intervalId = setInterval(()=>this.updateTimer(), 1000);
    }
    updateTimer() {
        const time = this.targetDate - new Date();
        if (time < 0) {
            clearInterval(this.intervalId);
            return;
        }
        const days = Math.floor(time / 86400000);
        const hours = Math.floor(time % 86400000 / 3600000);
        const mins = Math.floor(time % 3600000 / 60000);
        const secs = Math.floor(time % 60000 / 1000);
        this.refs.days.textContent = days;
        this.refs.hours.textContent = String(hours).padStart(2, '0');
        this.refs.mins.textContent = String(mins).padStart(2, '0');
        this.refs.secs.textContent = String(secs).padStart(2, '0');
    }
}
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2025')
});

//# sourceMappingURL=hw-han.579125c3.js.map
