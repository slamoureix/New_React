import React, { useEffect, useRef} from 'react';
import {easingMaterial, tl} from '../../scripts/gsap';

/* IMG */
import src from './photo_CV_5.webp';

export default function About() {
    const img = useRef(null)
    const me = useRef(null)
    const presentation = useRef(null)
    
    useEffect(() => {
        tl.to(me.current, {visibility: "visible", delay: 0, duration: 0 })
        .from(img.current, {
            y: 50,
            opacity: 0,
            duration: .3,
            ease: easingMaterial,
            delay: .1
        })
        .from(presentation.current, {
            y: 50,
            opacity: 0,
            duration: .5,
            ease: easingMaterial,
            delay: .3
        })
        .fromTo(".separate", {opacity: 0, scale: 0, x: -250, duration: 1, ease: easingMaterial,},{scale: 1, opacity: 1, rotate: 360, x: 0})
        
    },[])
    

    return (
        <article 
        ref={me}
        className="me">
            <div className="me_content">
                <span className="separate" />
                <img className="portrait" src={src} ref={img} loading="lazy" alt="portrait de Sébastien Lamoureix" />
                    <p 
                    ref = {presentation}
                    className = "presentation" >
                        Passionné par <strong> le design graphique</strong>, <strong>l'édition</strong>,<br/> 
                        <strong>la création web </strong> et <strong>le développement front&#8209;end</strong><br/>
                        je suis <span><strong>Indépendant</strong></span> depuis <span className="date">2016</span>. 
                    </p>
                <span className="separate" />
            </div>
        </article>
    )
}
