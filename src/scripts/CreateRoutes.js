import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";



export const CreateRoutes = () => {
    const [RouteState, setRouteState]= useState([])
    const ObjRoutes = useSelector(({AllRoutesReducer}) => ({...AllRoutesReducer}))

    useEffect(() => {
        const ArrRoutes = [];
        for (let AllRoutes of Object.keys(ObjRoutes)) {
            const Routes = ObjRoutes[AllRoutes];
                for (let route of Object.keys(Routes)) {
                    let oneRoute = Routes[route];
                        for (let name of Object.keys(oneRoute)){
                            let r = oneRoute[name];
                            // exact permet de matcher avec le string exact
                            let jsxRoute = <Route key={r.path} exact path={r.path} component= {r.component} />
                            ArrRoutes.push(jsxRoute);
                        }
                }
        }

    setRouteState(ArrRoutes);

    }, [])

    return RouteState;
    }