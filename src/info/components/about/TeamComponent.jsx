import { useState } from "react"
import carlos from "../../../assets/carlos.jpg"
import demich from "../../../assets/demich.png"
import kat from "../../../assets/kat.jpg"
import jaru from "../../../assets/jaru.png"
import petveloper from "../../../assets/petveloper.jpg"

export const TeamComponent = () => {
    const [showDescriptionCeo1, setShowDescriptionCeo1] = useState(false)
    const [showDescriptionCeo2, setShowDescriptionCeo2] = useState(false)
    const [showDescriptionMkt, setShowDescriptionMkt] = useState(false)
    const [showDescriptionRh, setShowDescriptionRh] = useState(false)
    const [showDescriptionPet, setShowDescriptionPet] = useState(false)

    return (
        <>
            <div className="row w-100 p-0 m-0">
                <div className="col-12 title-intro text-center text-primary">
                    Conoce a nuestro equipo
                </div>
            </div>
            <div className="container">
                <div className="row w-100 p-0 m-0">
                    <div className="col-lg-6 col-md-6 col-sm-12 my-4">
                        <div className="row m-0 align-items-center justify-content-center">
                            <div className="col-auto text-center">
                                <div className="picture-container">
                                    <img
                                        src={carlos}
                                        alt="Co-Founder/CEO"
                                        width={'60%'}
                                        className={`rounded-4 shadow ${showDescriptionCeo1 ? 'opacity-50' : ''}`}
                                        onMouseEnter={() => setShowDescriptionCeo1(true)}
                                        onTouchStart={() => setShowDescriptionCeo1(true)}
                                        onMouseLeave={() => setShowDescriptionCeo1(false)}
                                        onTouchEnd={() => setShowDescriptionCeo1(false)} />
                                    {showDescriptionCeo1 && <div className="position-centered text-info text-team">
                                        Carlos <br/> Co-Founder / CEO
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-4">
                        <div className="row m-0 align-items-center justify-content-center">
                            <div className="col-auto text-center">
                                <div className="picture-container">
                                    <img
                                        src={demich}
                                        alt="Co-Founder/CEO"
                                        width={'60%'}
                                        className={`rounded-4 shadow ${showDescriptionCeo2 ? 'opacity-50' : ''}`}
                                        onMouseEnter={() => setShowDescriptionCeo2(true)}
                                        onTouchStart={() => setShowDescriptionCeo2(true)}
                                        onMouseLeave={() => setShowDescriptionCeo2(false)}
                                        onTouchEnd={() => setShowDescriptionCeo2(false)} />
                                    {showDescriptionCeo2 && <div className="position-centered text-info text-team">
                                        Demich <br/> Co-Founder / CEO
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-4">
                        <div className="row m-0 align-items-center justify-content-center">
                            <div className="col-auto text-center">
                                <div className="picture-container">
                                    <img
                                        src={kat}
                                        alt="Marketing y ventas"
                                        width={'60%'}
                                        className={`rounded-4 shadow ${showDescriptionMkt ? 'opacity-50' : ''}`}
                                        onMouseEnter={() => setShowDescriptionMkt(true)}
                                        onTouchStart={() => setShowDescriptionMkt(true)}
                                        onMouseLeave={() => setShowDescriptionMkt(false)}
                                        onTouchEnd={() => setShowDescriptionMkt(false)} />
                                    {showDescriptionMkt && <div className="position-centered text-info text-team">
                                        Kat <br/> Marketing y Ventas
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-4">
                        <div className="row m-0 align-items-center justify-content-center">
                            <div className="col-auto text-center">
                                <div className="picture-container">
                                    <img
                                        src={jaru}
                                        alt="Recursos humanos"
                                        width={'60%'}
                                        className={`rounded-4 shadow ${showDescriptionRh ? 'opacity-50' : ''}`}
                                        onMouseEnter={() => setShowDescriptionRh(true)}
                                        onTouchStart={() => setShowDescriptionRh(true)}
                                        onMouseLeave={() => setShowDescriptionRh(false)}
                                        onTouchEnd={() => setShowDescriptionRh(false)} />
                                    {showDescriptionRh && <div className="position-centered text-info text-team">
                                        Jaru <br/> Recursos Humanos
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-4">
                        <div className="row m-0 align-items-center justify-content-center">
                            <div className="col-auto text-center">
                                <div className="picture-container">
                                    <img
                                        src={petveloper}
                                        alt="pet"
                                        width={`${window.innerWidth < 768 ? '60%' : '30%'}`}
                                        className={`rounded-4 shadow ${showDescriptionPet ? 'opacity-50' : ''}`}
                                        onMouseEnter={() => setShowDescriptionPet(true)}
                                        onTouchStart={() => setShowDescriptionPet(true)}
                                        onMouseLeave={() => setShowDescriptionPet(false)}
                                        onTouchEnd={() => setShowDescriptionPet(false)} />
                                    {showDescriptionPet && <div className="position-centered text-info text-team">
                                        Céntimos <br/> Petveloper
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}