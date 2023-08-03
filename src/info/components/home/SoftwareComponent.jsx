import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SoftwareComponent = () => {

    const [showDescriptionDesktop, setShowDescriptionDesktop] = useState(false)
    const [showDescriptionWeb, setShowDescriptionWeb] = useState(false)
    const [showDescriptionMovil, setShowDescriptionMovil] = useState(false)

    const navigate = useNavigate()

    const onDesktop = () => {
        navigate('/desktop')
    }

    const onWeb = () => {
        navigate('/web')
    }

    const onMobile = () => {
        navigate('/mobile')
    }

    const desktopScreen = () => {
        return (
            <div className="w-100 h-100 bg-secondary bg-opacity-25 m-0 row align-items-center justify-content-center">
                <div className="col-auto text-center animate__animated animate__lightSpeedInLeft">
                    <span className="text-white text-component">Desarrollo de software de escritorio</span>
                    <div className="row mt-1 align-items-center justify-content-center">
                        <div className="col-auto">
                            <button className="btn btn-primary text-white fw-bold" onClick={onDesktop}>Conoce más</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const desktopDescription = () => {
        return (
            <div className="w-100 h-100 bg-secondary bg-opacity-75 m-0 row align-items-center justify-content-center">
                <div className="col-auto animate__animated animate__zoomIn">
                    <div className="mx-2">
                        <div className="text-info description-component">
                            <span>
                                Desde soluciones internas de gestión hasta herramientas de productividad,
                                creamos software a medida, que se adapta a tus necesidades empresariales y potencia tu crecimiento
                            </span>
                        </div>
                        <div className="row mt-1 align-items-center justify-content-center">
                            <div className="col-auto">
                                <button className="btn btn-primary text-white fw-bold" onClick={onDesktop}>Conoce más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const webScreen = () => {
        return (
            <div className="w-100 h-100 bg-info bg-opacity-25 m-0 row align-items-center justify-content-center">
                <div className="col-auto text-center animate__animated animate__fadeIn">
                    <span className="text-white text-component">Desarrollo y diseño web</span>
                    <div className="row mt-1 align-items-center justify-content-center">
                        <div className="col-auto">
                            <button className="btn btn-primary text-white fw-bold" onClick={onWeb}>Conoce más</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const webDescription = () => {
        return (
            <div className="w-100 h-100 bg-info bg-opacity-75 m-0 row align-items-center justify-content-center">
                <div className="col-auto animate__animated animate__zoomIn">
                    <div className="mx-2">
                        <div className="text-light description-component">
                            <span>
                                Desarrollamos aplicaciones y sitios web personalizados. Ya sea una aplicación compleja 
                                o una página web atractiva, nos enfocamos en brindarte soluciones digitales a medida, que resalten
                                tu marca y te conecten con tu audiencia
                            </span>
                        </div>
                        <div className="row mt-1 align-items-center justify-content-center">
                            <div className="col-auto">
                                <button className="btn btn-primary text-white fw-bold" onClick={onWeb}>Conoce más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const movilScreen = () => {
        return (
            <div className="w-100 h-100 bg-success bg-opacity-25 m-0 row align-items-center justify-content-center">
                <div className="col-auto text-center animate__animated animate__lightSpeedInRight">
                    <span className="text-white text-component">Desarrollo móvil</span>
                    <div className="row mt-1 align-items-center justify-content-center">
                        <div className="col-auto">
                            <button className="btn btn-primary text-white fw-bold" onClick={onMobile}>Conoce más</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const movilDescription = () => {
        return (
            <div className="w-100 h-100 bg-success bg-opacity-75 m-0 row align-items-center justify-content-center">
                <div className="col-auto animate__animated animate__zoomIn">
                    <div className="mx-2">
                        <div className="text-info description-component">
                            <span>
                                Desarrollamos aplicaciones móviles para iOS y Android. Desde aplicaciones empresariales 
                                hasta experiencias de usuario cautivadoras, creamos aplicaciones móviles personalizadas que 
                                te ayudan a llegar a tus clientes en cualquier momento y lugar
                            </span>
                        </div>
                        <div className="row mt-1 align-items-center justify-content-center">
                            <div className="col-auto">
                                <button className="btn btn-primary text-white fw-bold" onClick={onMobile}>Conoce más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="row w-100 p-0 m-0">
                <div className="desktop-component col-lg-4 col-md-4 col-sm-12 p-0 m-0 shadow-lg"
                    style={{height: '500px'}}
                    onMouseEnter={() => setShowDescriptionDesktop(true)} onTouchMove={() => setShowDescriptionDesktop(!showDescriptionDesktop)}
                    onMouseLeave={() => setShowDescriptionDesktop(false)}>
                    {showDescriptionDesktop ? desktopDescription() : desktopScreen()}
                </div>
                <div className="web-component col-lg-4 col-md-4 col-sm-12 p-0 m-0 shadow-lg"
                    style={{height: '500px'}}
                    onMouseEnter={() => setShowDescriptionWeb(true)} onTouchMove={() => setShowDescriptionWeb(!showDescriptionWeb)}
                    onMouseLeave={() => setShowDescriptionWeb(false)}>
                    {showDescriptionWeb ? webDescription() : webScreen()}
                </div>
                <div className="movil-component col-lg-4 col-md-4 col-sm-12 p-0 m-0 shadow-lg"
                    style={{height: '500px'}}
                    onMouseEnter={() => setShowDescriptionMovil(true)} onTouchMove={() => setShowDescriptionMovil(!showDescriptionMovil)}
                    onMouseLeave={() => setShowDescriptionMovil(false)}>
                    {showDescriptionMovil ? movilDescription() : movilScreen()}
                </div>
            </div>
        </>
    )
}