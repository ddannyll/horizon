import { useEffect, useRef, useState } from "react";
import { STAR_DENSITY, STAR_FIELD_X, STAR_FIELD_Y } from "../config"

function Stars({className}) {
    const background = useRef()
    const [stars, setStars] = useState([])

    useEffect(() => {
        const area = STAR_FIELD_X * STAR_FIELD_Y
        const numStars = Math.floor((area / 100000) * STAR_DENSITY)
        const newStars = []
        for (let i = 0; i < numStars; i++) {
            const posX = rand(0, STAR_FIELD_X)
            const posY = rand(0, STAR_FIELD_Y)
            const size = rand(2, 10)
            const star = (
                <div className={`star absolute bg-white rounded-full`} 
                     style={{left:posX, top:posY, width:`${size}px`, height:`${size}px`}}
                     key={`${posX} ${posY}`}/>
            )
            newStars.push(star)
        }
        setStars(newStars)
    }, [])

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }



    return (
        <div className={`${className}`} ref={background}>
            {stars}
        </div>
    )
}

export default Stars