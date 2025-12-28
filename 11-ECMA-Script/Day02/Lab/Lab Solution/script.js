// // Task 1

class Clock {
  #intervalId;

  constructor(initialTime) {
    const [hours, minutes, seconds] = initialTime.split(":");
    this.hours = Number(hours);
    this.minutes = Number(minutes);
    this.seconds = Number(seconds);
  }

  static formatTime(hours, minutes, seconds) {
    return `${hours}:${minutes}:${seconds}`;
  }

  #tick() {
    this.seconds++;
    if (this.seconds == 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes == 60) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours == 24) {
      this.hours = 0;
    }
  }

  start() {
    this.#intervalId = setInterval(() => {
      this.#tick();
    }, 1000);
  }

  stop() {
    clearInterval(this.#intervalId);
  }

  getTime() {
    return Clock.formatTime(this.hours, this.minutes, this.seconds);
  }
}
// const clock1 = new Clock("12:25:22");
// console.log(clock1.hours);
// console.log(Clock.formatTime(12, 20, 22));

// clock1.start();
// setTimeout(() => {
//   console.log(clock1.seconds);
//   clock1.stop();
// }, 2000);

//===============================================//

// Task 2
class AlarmClock extends Clock {
  #alarmTime;

  constructor(initialTime, alarmTime) {
    super(initialTime);
    this.#alarmTime = alarmTime;
  }

  #checkAlarm() {
    const currentTime = this.getTime();

    if (currentTime === this.#alarmTime) {
      console.log("Alarm ringing");
    }
  }

  start() {
    super.start(() => this.#checkAlarm());
  }

  // PUBLIC METHOD
  setAlarm(newAlarmTime) {
    this.#alarmTime = newAlarmTime;
  }
}

const sleepAlarmClock = new AlarmClock("14:59:55", "15:00:00");
sleepAlarmClock.start();

setTimeout(() => {
  sleepAlarmClock.setAlarm("15:01:00");
}, 1000);
