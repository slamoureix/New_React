import { useEffect, useState } from "react";
import { useSelector} from "react-redux";

export function useAnimHomePage(localAnimState, ref) {
    // Tous se qui est en dehors du use effect est effectué quand le composant n'existe pas.

    const AllStatut = useSelector(state => ({
        ...state.AnimReducer.statut
    }))
    const [visibilityState, setVisibilityState] = useState( 
        //     // si visibility est true alors ... Sinon ...
        // transformation du booléan > statut  
        localAnimState.visibility ? AllStatut.VISIBLE : AllStatut.HIDDEN);
    console.log('1')
    // Le composant existe donc tu fais ça > 
    useEffect(() => {
        console.log('2')
        if (!localAnimState.visibility) {
            ref.current.classList.add('Hidden');
            ref.current.style.animationDelay = `${localAnimState.duration}ms`;
            setVisibilityState(AllStatut.ENTERING);
        }else{
            console.log('visible')
            // setVisibilityState((s) => (s === AllStatut.HIDDEN ? AllStatut.ENTERING : AllStatut.VISIBLE))
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log('3');
        let currentElement = ref.current;
            if (visibilityState === AllStatut.ENTERING) {
                currentElement.classList.add(localAnimState.transition);
                let timer = setTimeout(() => {
                    currentElement.classList.remove('Hidden');
                    setVisibilityState(AllStatut.FINISH);
                }, localAnimState.duration + 100);

                return () => {
                    clearTimeout(timer)
                }
            }
    }, [])

    useEffect(() => {
        console.log('4');
        let currentElement = ref.current;
        if (visibilityState === AllStatut.FINISH) {
                    let timer = setTimeout(() => {
                        currentElement.classList.add('Visible');
                        currentElement.classList.remove(localAnimState.transition);
                    }, localAnimState.duration * 10);
                    return () => {
                        clearTimeout(timer)
                    }
                }
    }, [])

    // useLayoutEffect(() => {
    //     let currentElement = ref.current;

    //     if (visibilityState === AllStatut.ENTERING) {
    //         currentElement.classList.add(localAnimState.transition);
    //         let timer = setTimeout(() => {
    //             currentElement.classList.remove('Hidden');
    //             setVisibilityState(AllStatut.FINISH);
    //         }, localAnimState.duration + 100);

    //         return () => {
    //             clearTimeout(timer)
    //         }
    //     }

    //     if (visibilityState === AllStatut.FINISH) {
    //         let timer = setTimeout(() => {
    //             currentElement.classList.add('Visible');
    //             currentElement.classList.remove(localAnimState.transition);
    //         }, localAnimState.duration * 10);
    //         return () => {
    //             clearTimeout(timer)
    //         }
    //     }
        
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [visibilityState])
}

