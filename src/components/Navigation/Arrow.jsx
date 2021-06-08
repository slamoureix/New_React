import React from 'react'
import ArrowLeft from './Arrows/Arrow_left/ArrowLeft'
import ArrowRight from './Arrows/Arrow_right/ArrowRight';

export default function Arrow({className}) {
    return className === 'next' ? <ArrowRight className={className} /> : <ArrowLeft className={className}/>
}

