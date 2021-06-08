import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';




export default function AnimTransition({visible, duration = 1000,children}) {
    // let className = '';
    // const statuts = useSelector(state => ({
    // ...state.AnimReducer.statut
    //                 }));
    // const classes = useSelector(state => ({
    // ...state.AnimReducer.class
    //                 }));

    // const [localState, setLocalState] = useState(visible ? statuts.VISIBLE : statuts.HIDDEN);

    // // on utilise la méthode d'ajout de class CSS pour l'animation.
    // const className = localState === statuts.HIDDEN ? classes.Hidden : classes.Visible; 

    // useEffect(() => {
    //     console.log(localState);
    // }, [localState])

    // permet de complétement virer l'élément du dom dès que le statut est sur HIDDEN.
    // if (localState === statuts.HIDDEN) {
    //     return null;
    // }



    // // On assigne à notre composant local un état en fonction la variable visible.
    // // Si visibke = true alors on lui donne la valeur HIDDEN Sinon VISIBLE
    // const [state, setState] = useState(visible ? HIDDEN : VISIBLE); 
    // // On va pouvoir gerer l'état en fonction de note state 
    // let className = state === HIDDEN ? 'Hidden' : 'Visible'; /
    
    // useEffect(() => {
    //     // SI visible est égale à false passe l'état à leaving 
    //     // sinon si l'état actuel est a hidden passe en mode enterring sinon VISIBLE.
    //     (!visible) ? setState(LEAVING) : setState((s) => (s === HIDDEN ? ENTERING : VISIBLE))
    // }, [visible]) // on écoute la prop vible pour re rendre le contenu en cas de changement.

    // useEffect(() => {
    //     // On ajoute une autre logique au composant lié au state local
    //     // si l'état est LEAVING alors passe l'état local sur Hidden au bout de 1000s (tps de l'anim)
    //     if (state === LEAVING) {
    //         const timer = setTimeout(() => {
    //             setState(HIDDEN)
    //         }, 1000);
    //         return () => {clearTimeout(timer)}
    //     }
    //     // sinon si l'état est ENTERING alors on passe l'état local sur VISIBLE
    //     else if (state === ENTERING) {
    //         setState(VISIBLE)
    //     }
    // }, [state]) 


    // if(state === HIDDEN){
    //     return null
    // }

    return (<>{children} </>);
}

