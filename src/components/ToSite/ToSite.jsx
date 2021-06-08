import React from 'react'

export default function ToSite({toSite}) {
    return (
        <button type="button" className="toSite_col">
            <a className="toSite_content" href={toSite} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 105 55"><path d="M2.78,52.36,52.5,2.64l49.72,49.72ZM52.5,14,22.08,44.36H82.92Z"/></svg>
                <p>Découvrir</p>
            </a>
        </button>
    )
}
