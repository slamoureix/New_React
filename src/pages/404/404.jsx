import React from 'react'
import { Link } from 'react-router-dom';

export default function error_404() {
    return (
        <div className="Box error404">
            <div className="box_404">
                <div className="svg_box">
                    <svg viewBox="0 0 22.26 64.78">
                    <rect width="8.09" height="29.6"/>
                    <line x1="21.76" x2="21.76" y2="64.78"/>
                    <polyline points="7.59 29.1 14.67 29.1 14.67 36.18 21.76 36.18"/>
                    </svg> 
                </div>
                <div className="svg_box">
                    <svg viewBox="0 0 22.26 64.78"><path d="M27.05,1.42H5.3V66.2H27.55V1.42ZM13.38,65.2V2.42h6.09V65.2Z" transform="translate(-5.3 -1.42)"/></svg>
                </div>
                <div className="svg_box">
                    <svg viewBox="0 0 22.26 64.78">
                    <rect width="8.09" height="29.6"/>
                    <line x1="21.76" x2="21.76" y2="64.78"/>
                    <polyline points="7.59 29.1 14.67 29.1 14.67 36.18 21.76 36.18"/>
                    </svg> 
                </div>
            </div>
            <div className="content">
                <p>Oups ! la page est partie dans les limbes des internets...</p>
                <p>Revenir à l'accueil <br></br>
                <span></span> <Link className="link" to="/">Home</Link>
                </p>
            </div>
        </div>
    )
}
