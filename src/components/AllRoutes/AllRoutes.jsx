import {useRef, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, useLocation } from 'react-router'
import { Transition, TransitionGroup } from 'react-transition-group'
import { easingMaterial, tl} from '../../scripts/gsap'


export default function AllRoutes() {
    const loc = useLocation(null) /* Use Location permet de détécter l'url courant */
    const routeRef = useRef(null) /* UseRef permet de créer une ref à la cible de l'élément */
    
    function CreateRoutes () {
    const ObjRoutes = useSelector(({AllRoutesReducer}) => ({...AllRoutesReducer})) /* on récupère l'ensemble des routes dans le reducer global */
    const ArrRoutes = [];

    for (let AllRoutes of Object.keys(ObjRoutes)) {
            const Routes = ObjRoutes[AllRoutes];
                for (let route of Object.keys(Routes)) {
                    let oneRoute = Routes[route];
                        for (let name of Object.keys(oneRoute)){
                            let r = oneRoute[name];
                            if (r.typeofLink === "external") ArrRoutes.push(<Route key = {r.path} path={r.path} />)
                            
                            // exact permet de matcher avec le string exact
                            if (r.typeofLink !== "external") {
                                ArrRoutes.push(
                                <Route key={r.path} exact path={r.path}>
                                <div 
                                className = "transitComponent"
                                style ={{visibility:'hidden'}}
                                ref = {routeRef}>

                                <r.component />
                                </div>
                                </Route>
                                );}
                        }
                }
        }
        return ArrRoutes
    }

    const onEnter = (isAppering) =>{
        if (!isAppering) {
            tl.from(routeRef.current, {
                opacity: 0,
                y: -100,
                x: 25,
                skewX :-10,
                duration: '500ms',
                ease: easingMaterial,
            })
        }
    }
    const onExit = () => {
        tl.from(routeRef.current, {
            opacity :0,
            y: 150,
            x: -25,
            skewX: 10,
            duration: 1.25,
            ease: easingMaterial,
        })
    }
    const onEntered = () => {
        routeRef.current.removeAttribute("style");
    }
    const onExited = () => {
        routeRef.current.removeAttribute("style");
    }
    useEffect(() => {
        console.log(loc)

        tl.to(routeRef.current, {
            visibility: "visible",
            delay: 0,
            duration: '600ms'
        })
    }, [])

    return (
        <TransitionGroup 
            component={null} /* permet de créer un container engloblant  */
            >
            <Transition
            mountOnEnter
            unmountOnExit

            key={loc.key}
            nodeRef={routeRef} /* nodeRef > permet d'associer le composant cssTransition avec l'élement enfant */ 
            
            timeout = {{enter : 300, exit : 600}}

            onEnter={onEnter}
            onExit={onExit}

            onEntered={onEntered}
            onExited={onExited}
            > 
                <Switch location={loc}>
                    {CreateRoutes()}
                </Switch>
            </Transition>

        </TransitionGroup>
        
    )
}

// classNames= '******* /* classNames > permet d'associer une class générique pour appliquer les transitions Css */
/* 
ORDER >
onEnter = {onEnter}     Transition lancé immédiatement après l’application de la classe 'enter' ou 'appear'
onEntering = {}         Transition lancé immédiatement après l’application de la classe 'enter-active' ou 'appear-active'.
onEntered={onEntered}   Transition lancé immédiatement après la suppression des classes 'enter' ou 'appear' et l’ajout de la classe done au nœud DOM

onExit = {}             Transition lancé immédiatement après l’application de la classe 'exit'
onExiting ={onExiting}  Transition lancé immédiatement après l’application de 'exit-active'
onExited = {onExited}   Transition lancé immédiatement après la class Exit et rétiré et exit-done ajoutée.
*/