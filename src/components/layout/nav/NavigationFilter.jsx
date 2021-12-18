import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationFilter() {
    return (
        <div className="options">
            <Link className="all" to="/">All</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/vehicles">Vehicles</Link>
        </div>
    )
}
