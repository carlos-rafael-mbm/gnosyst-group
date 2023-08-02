import { useState } from "react"

import backgroundHome from "../../../assets/background-home.png"
import backgroundHomeVertical from "../../../assets/background-home-vertical.png"

export const InitialComponent = () => {
    const [newSize, setNewSize] = useState(window.innerWidth)

    const updateSize = () => {
        setNewSize(window.innerWidth)
    }

    window.addEventListener("resize", updateSize)

    return (
        <>
            <div className="header-home">
                {
                    newSize <= 1000 ?
                        <img src={backgroundHomeVertical} style={{visibility: "hidden"}} width={'100%'} />
                    :
                        <img src={backgroundHome} style={{visibility: "hidden"}} width={'100%'} />
                }
            </div>
        </>
    )
}