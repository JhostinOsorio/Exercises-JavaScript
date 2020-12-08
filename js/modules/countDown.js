const d = document;
let interval;

const countDown = (e, inputlimitDateTime, startCountDown, stopCountDown, boxCountDown) => {

    const btnStart = d.querySelector(startCountDown),
          btnCancel = d.querySelector(stopCountDown),
          limitDateTime = d.querySelector(inputlimitDateTime),
          box = d.querySelector(boxCountDown);

    if(e.target.matches(startCountDown)) {
        if(limitDateTime.value) {
            const limitTime = new Date(limitDateTime.value).getTime();
            let currentTime = new Date().getTime();

            if (limitTime - currentTime >= 60000) {
                limitDateTime.disabled = true
                btnStart.disabled = true
                btnCancel.disabled = false

                interval = setInterval(() => {
                    currentTime = new Date().getTime()
                    const diffTime = limitTime - currentTime;
                    
                    const days = Math.floor(diffTime / 86400000)
                    const hours = Math.floor((diffTime % 86400000) / 3600000)
                    const minutes = Math.floor(((diffTime % 86400000) % 3600000) / 60000)
                    const seconds = Math.floor((((diffTime % 86400000) % 3600000) % 60000) / 1000)
                    box.textContent = `Faltan ${(days>999)?days:('00'+days).slice(-3)} días ${('0'+hours).slice(-2)} horas ${('0'+minutes).slice(-2)} minutos ${('0'+seconds).slice(-2)} segundos.`
                
                    if(diffTime - 1000 <= 0) {
                        clearInterval(interval)
                        limitDateTime.disabled = false
                        btnStart.disabled = false
                        btnCancel.disabled = true
                        box.textContent = 'Llegaste al tiempo limite'
                    }
                
                }, 1000);
            } else alert('Lleva menos de 1 minuto, ingrese otra fecha y hora')
        } else {
            alert('Ingresa una fecha y hora valida');
        }
    }

    if(e.target.matches(stopCountDown)){
        clearInterval(interval)
        limitDateTime.disabled = false
        btnStart.disabled = false
        box.textContent = 'Faltan - - - días - - horas - - minutos - - segundos'
    }
}

export default countDown