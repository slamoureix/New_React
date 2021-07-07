import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { useLinksCreate } from '../../uselinksCreate';

import {gsap} from 'gsap';

import Logo from '../Logo/Logo';

export default function Header() {
    const navMenu = useRef();
    // Creation de la navigation avec récupération des routes.
    const linkNavRoutes = useSelector(state => ({
        ...state.AllRoutesReducer.RoutesReducer.Nav
    }));
    const linksNav = useLinksCreate(linkNavRoutes)
    
    
    // retour à l'accueil et switch to projets to home.
    const location = useLocation(); // permet de recupérer l'url courant.
    const homeRef = useRef(null);
    const anchorRef = useRef(null);
    const history = useHistory();
    const [locationState, setLocation] = useState(location);


    
    const home = <button ref={homeRef} style={{cursor:'pointer'}} onClick={() => history.push('/')} className="link link__home">Accueil</button>
    const anchor = <a ref={anchorRef} className="link" href="#projet" target="_self">Réalisations</a> /* verifications des ancres react */
    

    useEffect(() => { 
        // anchorRef.current.addEventListener('click', (e) => {
        //     console.log(e)
        //     e.preventDefault()
        // })

        /* Animation */
        gsap.fromTo(navMenu.current, {
            opacity: 0,
            y: 50,
            delay: 0,
            duration: 0
        }, {
            opacity: 1,
            y: 0,
            duration: .5,
            delay: 1
        })
    
    }, [])
    
    useEffect(() => {
        setLocation(location)
        if (locationState.pathname !== '/') homeRef.current.classList.add('animate') 
    }, [location, locationState.pathname])
    
    return (
        <header className="header">
            <Logo/>
            <nav ref= {navMenu} className="NavMenu">
                <ul>
                <li>{locationState.pathname === '/'? anchor : home}</li>
                {linksNav}
                </ul>
            </nav>
        </header>
    )
}



