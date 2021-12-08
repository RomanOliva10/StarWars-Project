
import characters from "../mocks/characters"

import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "https://swapi.dev/api/people/";
const img = [
    "./img/characters/luke-skywalker.jpeg",
    "./img/characters/Anakin-Skywalker.jpeg",
    "./img/characters/c-3po.jpeg",
    "./img/characters/r2-d2.jpeg",
    "./img/characters/Darth-Vader.jpeg",
    "./img/characters/leia.jpeg",
    "./img/characters/Obi-Wan-Kenobi.jpeg",
    "./img/characters/Anakin-Skywalker.jpeg",
    "./img/characters/chewbacca.jpeg",
    "./img/characters/han-solo.jpeg",
    "./img/characters/Yoda.jpeg"
];
let i = 0;

export default function Prueba() {
    const [data, setData] = useState({ results: [] });
  axios
    .get(baseURL)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => err);
    console.log(data)
    return (
        <div>
            {data.results.map((ele, idx)=>(
                <div key={idx}>
                    <p>{ele.name}</p>
                    <img src={img[i]}></img>
                </div>
            ))}
        </div>
    )
}
