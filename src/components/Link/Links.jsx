import React, { forwardRef } from 'react';
import {NavLink} from 'react-router-dom';
import {external, project, underProject} from '../../config.js';
import {CreatePicture} from '../../scripts/CreatePicture';


const externalLink = forwardRef((props, ref) => (
<a ref={ref} href={props.props.path} target={props.props.target} rel="noreferrer noopener" className="link">{props.props.name}</a>))

export default function Links(props) {

    switch (props.typeofLink) {
        
        case external:
            return (
            <li>
                <NavLink to="/" props={props} component={externalLink} replace />
            </li>
        );
        case project:
            return (
            <li className="link__project">
            <div className="link__project_box">
            <NavLink 
            target = {props.target}
            to = {props.path}
            replace // replace current entry in the history stack
            >
                <p className="link link__project_name">{props.name}</p>
                <div className ="link__project_cover" >
                {CreatePicture(props.rep, props.cover.src_default, props.cover.sources, props.cover.alt)}
                </div>
            </NavLink>
            </div>
            </li>
        );
        case underProject:
            return (
            <>
            <li className="link__underProject_name">
            <NavLink 
            target = {props.target}
            to={props.path}
            replace >
                <span className = "link link__underProject"> { props.name} </span>
            </NavLink>
            </li>
            <span className="separation"></span>
            </>
        );
        default:
            return (
            <li>
                <NavLink activeClassName="link__current" className="link" 
                target = {props.target}
                to={props.path}
                replace >{props.name}</NavLink>
            </li>
        );
    }
}


