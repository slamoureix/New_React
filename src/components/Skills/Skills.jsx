import React from 'react';
import uuid from 'react-native-uuid';

export default function Skills({title, skills}) {
    return (
        <>
            <header className= "title"><h1>{title}&nbsp;:</h1></header>
            <ul>
                {skills.map(skill => (<li key={uuid.v4()}><strong>{skill}</strong>&#8239;<span/>&#8239;</li>))}
            </ul>
        </>
    )
}
