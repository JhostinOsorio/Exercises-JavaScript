const d = document
const showButtonToTop = (buttonToTop) => {
    const btnToTop = d.querySelector(buttonToTop)
    if (btnToTop) {
        if(scrollY > 400) btnToTop.classList.add('button-to-top--show')
        else btnToTop.classList.remove('button-to-top--show')
    }
}

const toTop = (e, buttonToTop) => {
    if(e.target.matches(buttonToTop)) {
        scrollTo({
            behavior:"smooth",
            top: 0
        })
    }
}

export {showButtonToTop, toTop}