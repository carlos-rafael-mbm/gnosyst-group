import { useEffect } from "react"
import {InitialComponent, SloganComponent} from "../components/about"

export const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0) // Hace scroll al inicio de la página cuando el componente se monta
    }, [])
    
    return (
        <>
            <InitialComponent />
            {/* <TeamComponent /> */}
            <SloganComponent />
        </>
    )
}