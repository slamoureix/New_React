import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import ButtonHome from '../Buttons/ButtonHome';
import Arrow from '../Navigation/Arrow';


export default function Navigation(props) {
    const [navState, setNavState] = useState({
            last: {path : '/', name : 'name'}, 
            next: {path : '/', name : 'name'}
        });
        
    useEffect(() => {
        for (let index = 0; index < Object.values(props.routes).length; index++) {
            const element = Object.values(props.routes)[index];
            if (props.rep === element.rep) {
                setNavState(navState => ({
                    ...navState,
                    last: switchIndex(index, props.routes, "LAST"),
                    next: switchIndex(index, props.routes, "NEXT")}
                ))
            }
        }
    }, [props.rep, props.routes])


    return <nav className={`${props.rep}__navigation`}>
                    <Link className= "last" to= {navState.last.path} replace>
                    <Arrow className="last" />
                    <p>{navState.last.name}</p>
                    </Link>

                    <ButtonHome/>
            
                    <Link className = "next" to = {navState.next.path} replace>
                    <p>{navState.next.name}</p>
                    <Arrow className="next"/>
                    </Link>
                </nav>
}


const switchIndex = (index, ObjProjects, action) => {
    
    switch (action) {
        case "LAST":
    if (index === 0) return {
        path: Object.values(ObjProjects)[Object.values(ObjProjects).length - 1].path,
        name: Object.values(ObjProjects)[Object.values(ObjProjects).length - 1].name
                            }
            
    if (index !== 0) return {  
        path: Object.values(ObjProjects)[index - 1].path, 
        name: Object.values(ObjProjects)[index - 1].name
                            }
    return

        case "NEXT":
    if (index === Object.values(ObjProjects).length - 1) return {
                path: Object.values(ObjProjects)[0].path,
                name: Object.values(ObjProjects)[0].name
            }
    if (index !== Object.values(ObjProjects).length) return {
                path: Object.values(ObjProjects)[index + 1].path,
                name: Object.values(ObjProjects)[index + 1].name
            }
    return

        default:
            break;
    }
}