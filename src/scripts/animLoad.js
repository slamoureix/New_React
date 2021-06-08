export function animaLoadHomePage(){
    // const ArrHtmlElement = [];
    const circles = document.querySelector('.circle_transition');
    // const name = document.querySelector('.name');
    // const logo = document.querySelector('.box_logo');
    // const NavMenu = document.querySelector('.NavMenu');
    // const NavSocial = document.querySelector('.NavSocial');
    // let count = 0;
    // ArrHtmlElement.push(logo, name, NavSocial, NavMenu);
    
    // ArrHtmlElement.forEach(el => {
    //     el.style.animationDelay = `${count}ms`;
    //     count += 300;
    //     el.classList.add('Hidden');
    //     el.classList.add('MoveTo');
    // })
    
    circles.classList.add('ToScaleTransition');
    setTimeout(() => {
        // ArrHtmlElement.forEach(el => {
        //     el.classList.add('Visible')
        // })
        circles.classList.add('Hidden');
    }, 2500);
}
