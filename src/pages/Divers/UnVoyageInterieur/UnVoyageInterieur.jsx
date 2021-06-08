import React, { useState } from 'react';
import ButtonHome from '../../../components/Buttons/ButtonHome';
// import {useSelector} from 'react-redux';
import Skills from '../../../components/Skills/Skills';
import Content from '../../../components/TemplateComponent/Content';
import Header from '../../../components/TemplateComponent/Header';

import useCreateImageGrid from '../../../useCreateImageGrid';
// datas 
import {
    UnVoyageInterieurData as nameProject
} from './data.js';
import TextPoetique from './Textpoetique';

export default function UnVoyageInterieur() {

    const [datasImgState] = useState(nameProject.img.content);

    // const DeveloppementRoutes = useSelector(({AllRoutesReducer}) => ({
    //     ...AllRoutesReducer.DeveloppementReducer.Developpement
    // }));

    return (
        <article className= {`${nameProject.rep}__project_container`}>
            <Header nameProjectProps= {nameProject} />
            <Content nameProjectProps= {nameProject} />
            <section className = {`${nameProject.rep}__skills_row`}>
                <Skills title= {nameProject.competence.title} skills={nameProject.competence.comp}></Skills>
            </section>
            <section className="poetique_row">
                <span className="separate"/>
                <TextPoetique/>
                <span className="separate" />
            </section>
            <ul className = {`${nameProject.rep}__images_row`}>
                    {useCreateImageGrid(datasImgState, nameProject.rep)} 
            </ul>
            <nav className={`${nameProject.rep}__navigation`}>
            <ButtonHome/>
            </nav>
        </article>
    )
}
