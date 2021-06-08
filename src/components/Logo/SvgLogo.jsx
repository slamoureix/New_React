import React from 'react'

export default function SvgLogo({classes}) {
    return (
        <div className={classes}>
        <svg viewBox="0 0 261.97 260.51">
        <path d = "M80.21,270.89H9.9V200.57Zm-62.32-8h43l-43-43Z"
        transform = "translate(-9.9 -10.38)" />
        <path d = "M271.87,200.57v70.32H201.55Zm-8,62.33v-43l-43,43Z"
        transform = "translate(-9.9 -10.38)" />
        <polygon points = "134.99 252.51 134.99 141.52 74.32 80.86 68.67 86.51 126.99 144.84 126.99 252.51 98.66 252.51 98.66 260.51 126.99 260.51 134.99 260.51 163.32 260.51 163.32 252.51 134.99 252.51" / >
        <polygon points = "0 0 36.33 0 36.33 8 8 8 8 115.67 66.32 174 60.67 179.65 0 118.98 0 0" />
        <polygon points = "191.66 191.84 191.66 8 163.32 8 163.32 0 199.65 0 199.65 191.84 191.66 191.84" />
        <path d = "M74.56,10.38,144.88,80.7V10.38Zm62.32,51-43-43h43Z"
        transform = "translate(-9.9 -10.38)" />
        </svg>
        <div className= "name" >
        <h1>Sebastien Lamoureix</h1>
        </div>
        </div>
    )
}
