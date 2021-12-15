import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationFilter() {
    return (
        <div className="options">
            <Link to="/">all databank</Link>
            <Link to="/characters">all characters</Link>
            <Link to="/vehicles">all vehicles</Link>
        </div>
    )
}
