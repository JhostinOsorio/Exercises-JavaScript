const d = document;
let interval;
const clock = (e, containerTime, buttonStart, buttonPause) => {
    if(e.target.matches(buttonStart)){
        const time = d.querySelector(containerTime)
        time.classList.add('time--show')
        const timeString = (new Date()).toLocaleTimeString()
        time.textContent = timeString
        interval = setInterval(() => {
            const timeString = (new Date()).toLocaleTimeString()
            time.textContent = timeString
        }, 1000);
        e.target.disabled = true
    }
    if(e.target.matches(buttonPause)){
        const time = d.querySelector(containerTime)
        clearInterval(interval)
        d.querySelector(buttonStart).disabled = false
        time.textContent = null
    }
}

let audio = d.createElement('audio')

const alarm = (e, sound, buttonStart, buttonPause) => {
    audio.src = sound
    if(e.target.matches(buttonStart)){
        audio.play()
        e.target.disabled = true
    }
    if(e.target.matches(buttonPause)){
        audio.pause()
        d.querySelector(buttonStart).disabled = false
    }
}

export {clock, alarm}