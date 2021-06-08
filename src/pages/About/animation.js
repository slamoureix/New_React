import {
    gsap
} from "gsap";


export const aboutLoad = () => {
    const tl = gsap.timeline()
    tl.from(".me", {
        display: "none",
        opacity:0,
        delay:0
    })

    tl.from(".portrait", {
        y: 50,
        opacity: 0,
        duration: .5,
        ease: "power5",
        delay: .1
    })

    tl.from('.presentation', {
        x: -50,
        opacity: 0,
        duration: .8,
        ease: "power4",
        delay: .3
    })
    tl.from(".separate", {
        opacity: 0,
        x: -50,
        delay: .1
    })
}