import { easingMaterial, gsapCore } from "../../scripts/gsap";

const classes = ".links_project>.link__project>.link__project_box"


export const AddHoverEffectOnLink = () => {
    
    // Array Links projects
    /* transformation de chaque nodelist en type array pour l'utilisation de la fonction indexOf() */
    const DevArrLinks = Array.from(document.querySelectorAll(`#Developpement>${classes}`));
    const TypoArrLinks = Array.from(document.querySelectorAll(`#Typographie>${classes}`));
    const UxuiArrLinks = Array.from(document.querySelectorAll(`#UxUi>${classes}`));
    const DiversArrLinks = Array.from(document.querySelectorAll(`#Divers>${classes}`));
    const EditionArrLinks = Array.from(document.querySelectorAll(`#Edition>${classes}`));
    
    //
    const AllLinks = [];
    let currentIndex = 0;

    AllLinks.push(DevArrLinks, TypoArrLinks, UxuiArrLinks, DiversArrLinks, EditionArrLinks)
    //
    AllLinks.forEach(Arr => {
        Arr.forEach(Link => {
            Link.addEventListener('mouseenter', e => {
                currentIndex = Arr.indexOf(e.target);
                Arr.forEach((Link, index) => {
                    if (index === currentIndex) e.target.classList.add('link__project_box--hover');
                    if (index !== currentIndex) Link.classList.add('blur');
                })
            })

            Link.addEventListener('mouseleave', () => {
                Link.classList.remove('link__project_box--hover');
                Arr.forEach((Link) => Link.classList.remove('blur'))
            })
        })
    })

}

export const ScrollEffectTranslation = () => {

    const ArrScroll = document.querySelectorAll(".scroll")
    
    ArrScroll.forEach(el => {
        const selectedClass = el.className.split(' ') /* découpe le class pour ne récupèrer que celle pour la selection */

        gsapCore.fromTo(`.${selectedClass}`, {
            opacity:0,
            y: -50,
            x: -450,
            skewX: 25,
        }, {
            opacity:1,
            x: 0,
            y: 0,
            skewX: 0,
            duration: .5,
            ease: easingMaterial,
            scrollTrigger: {
                trigger: `.${selectedClass}`,
                markers: false,
                start: "-75% center",
                end: "-25% center",
                scrub: true, /* permet le retour en arrière de l'animation au scroll revese*/
            }
        })
    }
    )


}