import React from 'react'

export default function Header({nameProjectProps}) {
    return (
        <header className = {`${nameProjectProps.rep}__head_row`}>
            <div className= "title"><h1>{nameProjectProps.name}</h1></div>
            <time dateTime= {nameProjectProps.year} className= "year">{nameProjectProps.year}</time>
        </header>
    )
}
