import { useState } from "react"

export const ProjectComponent = () => {

    const [showDescriptionConsulting, setShowDescriptionConsulting] = useState(false)
    const [showDescriptionFactory, setShowDescriptionFactory] = useState(false)

    const consultingScreen = () => {
        return (
            <div className="w-100 h-100 bg-light bg-opacity-25 m-0 row align-items-center justify-content-center">
                <div className="col-auto text-center animate__animated animate__lightSpeedInLeft">
                    <span className="text-white text-component">Consultoría de software</span>
                    <div className="row mt-1 align-items-center justify-content-center">
                        <div className="col-auto">
                            <button className="btn btn-primary text-white fw-bold">Conoce más</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const consultingDescription = () => {
        return (
            <div className="w-100 h-100 bg-light bg-opacity-75 m-0 row align-items-center justify-content-center">
                <div className="col-auto animate__animated animate__zoomIn">
                    <div className="mx-2">
                        <div className="text-info description-component">
                            <span>
                                Optimiza tus procesos empresariales con nuestra consultoría de software personalizada. 
                                Te brindamos asesoramiento técnico de alto nivel para mejorar tu infraestructura y 
                                maximizar el valor de la tecnología en tu negocio
                            </span>
                        </div>
                        <div className="row mt-1 align-items-center justify-content-center">
                            <div className="col-auto">
                                <button className="btn btn-primary text-white fw-bold">Conoce más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const factoryScreen = () => {
        return (
            <div className="w-100 h-100 bg-danger bg-opacity-25 m-0 row align-items-center justify-content-center">
                <div className="col-auto text-center animate__animated animate__lightSpeedInRight">
                    <span className="text-white text-component">Servicio de outsourcing de IT</span>
                    <div className="row mt-1 align-items-center justify-content-center">
                        <div className="col-auto">
                            <button className="btn btn-primary text-white fw-bold">Conoce más</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const factoryDescription = () => {
        return (
            <div className="w-100 h-100 bg-danger bg-opacity-75 m-0 row align-items-center justify-content-center">
                <div className="col-auto animate__animated animate__zoomIn">
                    <div className="mx-2">
                        <div className="text-light description-component">
                            <span>
                                Confía en nuestra experiencia en outsourcing de IT para impulsar tu negocio 
                                hacia adelante. Permítenos encargarnos de la tecnología mientras tú te concentras 
                                en el crecimiento y el éxito empresarial
                            </span>
                        </div>
                        <div className="row mt-1 align-items-center justify-content-center">
                            <div className="col-auto">
                                <button className="btn btn-primary text-white fw-bold">Conoce más</button>
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
                <div className="consulting-component col-lg-6 col-md-6 col-sm-12 p-0 m-0 shadow-lg"
                    style={{height: '500px'}}
                    onMouseEnter={() => setShowDescriptionConsulting(true)} onTouchStart={() => setShowDescriptionConsulting(true)}
                    onMouseLeave={() => setShowDescriptionConsulting(false)} onTouchEnd={() => setShowDescriptionConsulting(false)}>
                    {showDescriptionConsulting ? consultingDescription() : consultingScreen()}
                </div>
                <div className="factory-component col-lg-6 col-md-6 col-sm-12 p-0 m-0 shadow-lg"
                    style={{height: '500px'}}
                    onMouseEnter={() => setShowDescriptionFactory(true)} onTouchStart={() => setShowDescriptionFactory(true)}
                    onMouseLeave={() => setShowDescriptionFactory(false)} onTouchEnd={() => setShowDescriptionFactory(false)}>
                    {showDescriptionFactory ? factoryDescription() : factoryScreen()}
                </div>
            </div>
        </>
    )
}