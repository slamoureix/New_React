import {useEffect} from 'react'

import {
    AddHoverEffectOnLink,
    ScrollEffectTranslation
} from './script'

import { useSelector } from 'react-redux'
import TemplateHomeSection from './templateHomeSection'

export default function Content() {
    const Project = useSelector(({HomeProject}) => ({HomeProject}));

    useEffect(()=>{
        AddHoverEffectOnLink()
        ScrollEffectTranslation()
    }, [])

    return (
        <article id="projet">
            <header><h1>Réalisations</h1></header>
            {
            Project.HomeProject.map((e, index) => {
            return <TemplateHomeSection key={index} index={index} nameProject={e[0]} routes={e[1]} />
            })}
        </article>
    )
}






