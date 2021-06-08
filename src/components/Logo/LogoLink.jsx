import React from 'react'
import { Link } from 'react-router-dom'
import SvgLogo from './SvgLogo'

export default function LogoLink({classes}) {
    return <Link className = "link" to = "/"> <SvgLogo classes={classes} /> </Link>
}
