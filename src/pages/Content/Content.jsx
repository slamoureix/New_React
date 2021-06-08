import React, { useEffect} from 'react'

import Typographie from '../Typographie/Typographie'
import Developement from '../Developpement/Developpement'
import UxUi from '../UxUi/UxUi'
import Divers from '../Divers/Divers'

import {AddHoverEffectOnLink} from './script'

export default function Content() {
    useEffect(() => {AddHoverEffectOnLink()}, [])
    return (
        <article id="projet">
            <header><h1>Réalisations</h1></header>
            <Developement/> 
            <UxUi/>
            <Typographie/> 
            <Divers/>
        </article>
    )
}

