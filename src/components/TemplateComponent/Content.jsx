import React from 'react'

export default function Content({nameProjectProps}) {
    return (
        <section className= {`${nameProjectProps.rep}__content`}>
            <p>{nameProjectProps.content}</p>
        </section>
    )
}
