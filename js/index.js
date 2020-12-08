import {buttonToggle} from './modules/toggle.js';
import {clock, alarm} from './modules/clock.js';
import {moveBall} from './modules/ball.js';
import countDown from './modules/countDown.js';

const d = document

d.addEventListener('click', e => {
    buttonToggle(e, '.button-toggle', '.nav', '.menulist__link')
    clock(e, '#time', '#startClock', '#pauseClock')
    alarm(e, './assets/audio/alarm.mp3', '#startAlarm', '#pauseAlarm')
    countDown(e,'#limitDateTime', '.startCountDown', '.stopCountDown', '#countDown')
})

d.addEventListener('keydown', e => {
    moveBall(e, '#container-box', '#ball')
})