class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerElement = document.querySelector(selector);
        this.refs = {
            days: this.timerElement.querySelector('[data-value="days"]'),
            hours: this.timerElement.querySelector('[data-value="hours"]'),
            mins: this.timerElement.querySelector('[data-value="mins"]'),
            secs: this.timerElement.querySelector('[data-value="secs"]'),
        };
        this.start();
    }

    start() {
        this.updateTimer();
        this.interval = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    updateTimer() {
        const time = this.targetDate - new Date();
        if (time <= 0) {
            clearInterval(this.interval);
            return;
        }

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.refs.days.textContent = days;
        this.refs.hours.textContent = this.pad(hours);
        this.refs.mins.textContent = this.pad(mins);
        this.refs.secs.textContent = this.pad(secs);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2025'),
});
