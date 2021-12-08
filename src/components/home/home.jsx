import React from 'react'
import { Fragment } from 'react'

import "./home.css"
import GetAll from './vehicles/getAll-Vehicles'

export default function Home() {
    return (
        <div className="container-home">
            <div className="options">
                <a href="">All Databank</a>
                <a href="">All Characters</a>
                <a href="">All vehicles</a>
            </div>
            <Fragment>
                <GetAll/>
            </Fragment>
        </div>
    )
}
