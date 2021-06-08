import React from 'react';

export default function Legals() {
    return (
        <div className="legals">
            <h1>Mentions Légales</h1>
            <h2>Création & Développement</h2>
            <p>
            <span><strong>Sébastien Lamoureix</strong><br/></span>
            3 rue frachet<br/>
            71000 Mâcon (France)<br/>
            <span className="legals_filet"></span>
            T. 06 82 59 45 65<br/>
            C. lamoureixs @gmail.com<br/>
            L’ adresse de notre site est &#8239;: <a className = "link"
            href = "https://www.sebastienlamoureix.fr" > https://www.sebastienlamoureix.fr</a> <br/>
            <span className="legals_filet"></span>
            Artiste Auteur < span > & gt; </span> Siret&#8239;: 829 910 009 00010<br/ >
            Développeur<span>&gt;</span> Siret&#8239;: 829 910 009 00028<br/>
            <span className="legals_filet"></span>
            Ce site est hébergé par Gandi.
            <span className="legals_filet"></span>
            @Copyright 2021 - Tous droits réservés.
            </p>
        </div>
    )
}
