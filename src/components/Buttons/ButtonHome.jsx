import React from 'react'
import { useHistory } from 'react-router'

export default function ButtonHome() {
    const history = useHistory()
    return <button onClick={() => history.push('/')} className="button_home">Accueil</button>
}
/* niveau accessibilité voir comment faire un bon button */