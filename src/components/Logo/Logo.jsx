import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import SvgLogo from './SvgLogo';
import LogoLink from './LogoLink';


export default function Logo() {
    const location = useLocation(); // permet de recupérer l'url courant.
    const [locationState, setLocation] = useState(location)
    useEffect(() => {setLocation(location)}, [location])

    return (
    <div className = "box_logo"> {
        locationState.pathname === '/' ? 
        <SvgLogo classes={"box_content_logo content_logo"} /> : 
        <LogoLink classes={"box_content_logo content_logo link"}/> } 
    </div>
    )
}