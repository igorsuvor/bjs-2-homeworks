class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) throw new Error('Параметр не передан');
    if (this.alarmCollection.find(item => item.id === id)) return console.error('Звонок уже существует');
    this.alarmCollection.push({id, time, callback});
  }

  removeClock(id) {
    if (this.alarmCollection.filter(item => item.id === id)) {
        const index = this.alarmCollection.findIndex(item => item.id === id);
        this.alarmCollection.splice(index, 1);
          return true;
      } else {
          return false;
        }
  }

  getCurrentFormattedTime() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();

    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    
    return `${hour}:${minute}`;
  }

  start() {
    const checkClock = (clock) => {
      if (this.getCurrentFormattedTime() === clock.time) return clock.callback();
    }
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        return this.alarmCollection.forEach(clock => checkClock(clock))
      }, 5000);
    }
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  printAlarms() {
    this.alarmCollection.forEach(clock => console.log(`Будильник ${clock.id} запуск ${clock.time}`))
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  const clockAlarm = new AlarmClock();
  clockAlarm.addClock('09:00', () => console.log('Подъём'), 1);
  clockAlarm.addClock('09:01', () => { console.log('Подъём ещё раз'); clockAlarm.removeClock(2) }, 2);
  clockAlarm.addClock('09:02', () => { console.log('Подъём последний раз'); clockAlarm.clearAlarms(); clockAlarm.printAlarms() }, 3);
  
  clockAlarm.printAlarms();
  clockAlarm.start();
}
  
testCase();