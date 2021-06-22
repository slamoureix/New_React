import React, { useState } from 'react'
import Skills from '../../../components/Skills/Skills.jsx';
import Content from '../../../components/TemplateComponent/Content.jsx';
import Header from '../../../components/TemplateComponent/Header.jsx';
import ToSite from '../../../components/ToSite/ToSite.jsx';
import useCreateImageGrid from '../../../useCreateImageGrid.jsx';

// datas 
import {
    portraitsDeLoireData as nameProject
} from './data.js';

export default function PortraitDeLoire() {
    const [datasImgState] = useState(nameProject.img.content);
    return (
        <article className = {`${nameProject.rep}__project_container`} >
            <Header nameProjectProps= {nameProject} />
            <Content nameProjectProps= {nameProject} />
            <section className = {`${nameProject.rep}__skills_row`}>
                        <Skills title= {nameProject.techno.title} skills={nameProject.techno.technos}/>
            </section>
            <section className = {`${nameProject.rep}__skills_row`}>
                        <Skills title= {nameProject.competence.title} skills={nameProject.competence.comp}/>
            </section>
            <section> 
                    <ul className = {`${nameProject.rep}__images_row` }>
                    {useCreateImageGrid(datasImgState, nameProject.rep)} {/*à voir en fonction du nombre d'image*/}
                    </ul>
                    <ToSite toSite= {nameProject.adress}/>
                    </section>
        </article>
    )
}
