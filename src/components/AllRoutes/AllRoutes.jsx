import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, useLocation } from 'react-router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


export default function AllRoutes() {
    
    const loc = useLocation() /* Use Location permet de détécter l'url courant */
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
                                ArrRoutes.push(<Route key={r.path} exact path={r.path}><div className="fade" ref={routeRef}><r.component/></div></Route>
                                );}
                        }
                }
        }
        return ArrRoutes
    }
    
    return (
        <TransitionGroup>
            <CSSTransition
            key={loc.key}
            timeout={300}
            nodeRef={routeRef} /* nodeRef > permet d'associer le composant cssTransition avec l'élement enfant */ 
            classNames= 'fade' /* classNames > permet d'associer une class générique pour appliquer les transitions Css */
            > 
                <Switch location={loc}>
                    {CreateRoutes()}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}
