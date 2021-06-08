import React from 'react'

import { useLinksCreate } from '../uselinksCreate'

export default function HomeSection({nameProject, routes}) {
    return (
        <section className= {`${nameProject.rep}__category_container`}>
            <div className= {`${nameProject.rep}__category_presentation`}>
                <h1>{nameProject.name}</h1>
            </div>
            <div id= {nameProject.rep} className= "project_container">
                <ul className="links_project"> {useLinksCreate(routes)} </ul>
            </div>
        </section>
    )
}
