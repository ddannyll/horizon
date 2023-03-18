import { useEffect, useRef, useState } from "react";
import { STAR_DENSITY } from "./config"

function Stars({className}) {
    const background = useRef()
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const area = background.current.clientHeight * background.current.clientWidth
        console.log(area);
        const numStars = (area / 100000) * STAR_DENSITY
        console.log(numStars);
    }, [])

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }



    return (
        <div className={"" + className} ref={background}>

        </div>
    )
}

export default Stars