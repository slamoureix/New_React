import React, { useEffect } from 'react'

import useForInContent from '../../useForInContent'
import useMapContent from '../../useMapContent'
import { competences } from './comp'

export default function Competences() {
    
    
    
    useEffect(() => {
        
    }, [])
    return (
            <article className="competence__project_container">
                <section>
                    <header className="head_row">
                        <div className= "title"><h1>Bio</h1></div>
                    </header>
                    <div className="competence_row">
                        <p className= "comp_bio">
                            Je suis designer graphique, intégrateur et développeur front&#8209;end, amoureux des arts, de l'édition et de l'image.
                            <br/>
                            J'associe fonds, formes, couleurs et typographies dans un esprit de symbiose afin de rendre l'expérience visuelle forte et émotionnellement riche.
                            <br/>
                            J’ai à cœur d’accomplir des projets où j’exprime ma créativité, j’apprécie le travail en équipe, l’échange et la polyvalence.
                            Pour continuer d'évoluer, j'expérimente sur de nombreux projets graphiques. 
                        </p>
                    </div>
                </section>
                <section>
                    <span className="separate"/>
                    <header className="head_row">
                        <div className= "title"><h1>Compétences</h1></div>
                    </header>
                    <div className = "competence_row" >
                        <p className= "comp_content">
                        De l'idée à la réalisation les étapes sont longues... <br/>
                        Pour vous aider dans ce chemin mes expériences et mes compétences sont à votre disposition. <br/>
                        Elles me permettent de prendre part à un large éventail de projet et d'intervenir durant toutes les étapes d'un projet.
                    </p>
                        <ul className="comp_boxes">
                            <li className="comp_box">
                                <h2 className= "subtitle">Développement</h2>
                                <ul>
                                {useMapContent(competences.developement, "comp_dev")}
                                </ul>
                            </li>
                            <li className="comp_box">
                                <h2 className= "subtitle">Technos</h2>
                                <ul>
                                {useForInContent(competences.devContent, "comp_devContent")}
                                </ul>
                            </li>
                            <li className="comp_box">
                                <h2 className= "subtitle">Langages</h2>
                                <ul>
                                {useMapContent(competences.language, "comp_language")}
                                </ul>
                            </li>
                    </ul>
                        <ul className="comp_boxes">
                            <li className="comp_box">
                                <h2 className= "subtitle">Conception Graphique</h2>
                                <ul>
                                {useMapContent(competences.design, "comp_design")}
                                </ul>
                            </li>
                            <li className="comp_box">
                                <h2 className= "subtitle">Imprimerie</h2>
                                <ul>
                                {useMapContent(competences.imprimerie, "comp_imprim")}
                                </ul>
                            </li>
                            <li className="comp_box">
                                <h2 className= "subtitle">Logiciels</h2>
                                <ul>
                                {useMapContent(competences.logiciel, "comp_logiciel")}
                                </ul>
                            </li>
                    </ul>
                    </div>
                    <span className="separate"/>
                </section>
                <div className="competence_row">
                    <p className="comp_contact"> 
                    Un projet, un devis, une collab ou juste pour échanger des mots doux&#8239;?
                    <br/>
                    c.&#8239;&gt;&nbsp;<a className="link" href ="mailto:lamoureixs@gmail.com">lamoureixs@gmail.com</a>
                    </p>
                </div>
            </article>)
}







/*
 
Les sites que nous concevons pour vous sont faits sur mesure et à votre image.
Nous nous assurons de leur bon fonctionnement sur mobile, tablette et ordinateur, 
ainsi que sur une large gamme de navigateurs.Statiques ou administrables, 
tous nos sites sont fondés sur les bonnes pratiques du référencement naturel.
Mais aussi sur les enjeux de l’ expérience utilisateur et du temps de chargement.
Qu’ il s’ agisse de développement mobile - first, thèmes WordPress sur mesure, sites HTML statiques ou encore e - commerces, 
nous adaptons les techniques et supports à vos besoins et sommes toujours à l’ affut d’ expérimenter de nouvelles technologies.
*/



