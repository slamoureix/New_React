const classes = ".links_project>.link__project>.link__project_box"


export const AddHoverEffectOnLink = () => {
    // Array Links projects
    const DevArrLinks = Array.from(document.querySelectorAll(`#Developpement>${classes}`));
    const TypoArrLinks = Array.from(document.querySelectorAll(`#Typographie>${classes}`));
    const UxuiArrLinks = Array.from(document.querySelectorAll(`#UxUi>${classes}`));
    const DiversArrLinks = Array.from(document.querySelectorAll(`#Divers>${classes}`));

    //
    const AllLinks = [];
    let currentIndex = 0;

    AllLinks.push(DevArrLinks, TypoArrLinks, UxuiArrLinks, DiversArrLinks)

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