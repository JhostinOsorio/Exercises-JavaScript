const d = document
let x = 0, y = 0

const moveBall = (e, box, ball) => {
    
    const interval = 10;
    const $box = d.querySelector(box),
    $ball = d.querySelector(ball),
    topBox = $box.getBoundingClientRect().top,
    topBall = $ball.getBoundingClientRect().top,
    bottomBox = $box.getBoundingClientRect().bottom,
    bottomBall = $ball.getBoundingClientRect().bottom,
    leftBox = $box.getBoundingClientRect().left,
    leftBall = $ball.getBoundingClientRect().left,
    rightBox = $box.getBoundingClientRect().right,
    rightBall = $ball.getBoundingClientRect().right;

    const moveTo = () => {
        $ball.style.transform = `translate(${x * interval}px, ${y * interval}px)`
    }

    switch (e.key) {
        case 'ArrowUp':
            if((topBall - interval) > topBox) {
                e.preventDefault();
                y--
                moveTo()
            }
            break;       
        case 'ArrowDown':
            if((bottomBox > (bottomBall + interval))){
                e.preventDefault();
                y++
                moveTo()
            }
            break;
        case 'ArrowLeft':
            if((leftBall) > leftBox){
                e.preventDefault();
                x--
                moveTo()
            }
            break;
        case 'ArrowRight':
            if(rightBox > (rightBall)){
                e.preventDefault();
                x++
                moveTo()
            }
            break;
    }
}

export {moveBall}