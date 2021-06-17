import React, {useRef} from 'react'
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
                                <div className="transitComponent" ref={routeRef}>
                                <r.component/>
                                </div>
                                </Route>
                                );}
                        }
                }
        }
        return ArrRoutes
    }

    const onEnter = () =>{
        tl.from(routeRef.current, {
            y: -150,
            opacity: 0,
            delay: 0,
            duration: 0,
            ease: easingMaterial,
        })
        
    }
    const onExit = () => {
        tl.fromTo(routeRef.current, {
            y: 150,
            visibility: "hidden",
            opacity: 0,
            autoAlpha: 0,
            delay: .2,
            ease: easingMaterial,
        }, {
            transform: 'none',
            opacity: 1,
            autoAlpha: 1
        })
        
        
    }
    const onEntered = () => {
        routeRef.current.removeAttribute("style");
    }
    const onExited = () => {
        routeRef.current.removeAttribute("style");
    }

    return (
        <TransitionGroup 
            component={null} /* permet de créer un container engloblant  */
            >
            

            <Transition
            key={loc.key}
            nodeRef={routeRef} /* nodeRef > permet d'associer le composant cssTransition avec l'élement enfant */ 
            
            timeout={{appear : 200, enter : 200, exit : 600}}

            onEnter={onEnter}
            onExit={onExit}

            onEntered={onEntered}
            onExited={onExited}
            unmountOnExit
            > 
                <Switch location={loc}>
                    {CreateRoutes()}
                </Switch>
            </Transition>

        </TransitionGroup>
        
    )
}

// classNames= 'fade' /* classNames > permet d'associer une class générique pour appliquer les transitions Css */

/* 
ORDER >

onEnter = {onEnter}     Transition lancé immédiatement après l’application de la classe 'enter' ou 'appear'
onEntering = {}         Transition lancé immédiatement après l’application de la classe 'enter-active' ou 'appear-active'.
onEntered={onEntered}   Transition lancé immédiatement après la suppression des classes 'enter' ou 'appear' et l’ajout de la classe done au nœud DOM

onExit = {}             Transition lancé immédiatement après l’application de la classe 'exit'
onExiting ={onExiting}  Transition lancé immédiatement après l’application de 'exit-active'
onExited = {onExited}   Transition lancé immédiatement après la class Exit et rétiré et exit-done ajoutée.
*/