const d = document
const buttonToggle = (e, btnToggle, nav, link) => {
    if(e.target.matches(btnToggle)){
        e.target.classList.toggle('button-toggle--active');
        d.querySelector(nav).classList.toggle('nav--show')
    }
    if(e.target.matches(link)){
        d.querySelector(btnToggle).classList.remove('button-toggle--active');
        d.querySelector(nav).classList.remove('nav--show')
    }
}

export {buttonToggle}