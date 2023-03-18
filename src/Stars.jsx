import { useEffect, useRef, useState } from "react";
import { STAR_DENSITY } from "./config"

function Stars({className}) {
    const background = useRef()
    const [height, setHeight] = useState(2000)
    const [width, setWidth] = useState(2000)
    const [stars, setStars] = useState([])

    useEffect(() => {
        setHeight(background.current.clientHeight)
        setWidth(background.current.clientWidth)
        document.body.onresize = () => {
            setHeight(background.current.clientHeight)
            setWidth(background.current.clientWidth)
        }
        return () => {document.body.onresize = () => {}}
    }, [])

    useEffect(() => {
        const area = background.current.clientHeight * background.current.clientWidth
        const numStars = Math.floor((area / 100000) * STAR_DENSITY)
        console.log({numStars});
        const newStars = []
        for (let i = 0; i < numStars; i++) {
            const posX = rand(0, width)
            const posY = rand(0, height)
            const star = (
                <div className={`star absolute w-2 h-2 bg-white rounded-full`} style={{left:posX, top:posY}} key={`${posX} ${posY}`}/>
            )
            newStars.push(star)
        }
        setStars(newStars)
    }, [height, width])

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }



    return (
        <div className={`overflow-hidden ${className}`} ref={background}>
            {stars}
        </div>
    )
}

export default Stars