import { useEffect } from 'react'
import bannerMobile from '../../assets/banner-mobile.png'
import mobilePage from '../../assets/mobile-page.png'
import mobile from '../../assets/mobile.jpg'

export const MobilePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0) // Hace scroll al inicio de la página cuando el componente se monta
    }, [])

    return (
        <>
            <div>
                <img src={bannerMobile} width={'100%'} />
            </div>
            <div className="row w-100 p-0 m-0">
                <div className="col-lg-9 col-md-7 col-sm-12 row py-2 px-5 m-0 align-items-center justify-content-center">
                    <div className="col-auto text-center">
                        <div className='title-desktop text-primary mb-2'>Experiencias móviles que impresionan</div>
                        <p className="text-desktop text-info">
                            Contamos con un equipo especialista en el desarrollo de aplicaciones móviles que llevan tu negocio al alcance de 
                            la mano de tus clientes. Nuestros desarrolladores móviles están dedicados a crear experiencias móviles cautivadoras 
                            y funcionales que conecten con tus usuarios en cualquier momento y lugar.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-12 p-0 m-0">
                    <img src={mobilePage} width={'100%'} />
                </div>
            </div>
            <div className="row w-100 p-0 m-0">
                <div className="col-lg-3 col-md-12 col-sm-12 p-0 m-0">
                    <img src={mobile} width={'100%'} />
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 p-5 m-0 bg-primary row align-items-center justify-content-center">
                    <div className="col-auto">
                        <div className='title-desktop-features text-info mb-2'>- Optimización para un alto rendimiento</div>
                        <p className="text-desktop-features text-white mb-5">
                            Nuestras aplicaciones móviles son desarrolladas con un enfoque en el rendimiento y la velocidad. 
                            Nos aseguramos de que tu aplicación cargue rápidamente, funcione sin problemas y sea confiable 
                            para que los usuarios disfruten de una experiencia sin interrupciones.
                        </p>
                        <div className='title-desktop-features text-info mb-2'>- Enfoque en la usabilidad y el diseño</div>
                        <p className="text-desktop-features text-white">
                            Entendemos la importancia de una excelente usabilidad y diseño en las aplicaciones móviles. 
                            Nuestro equipo trabaja en estrecha colaboración con nuestros clientes para crear aplicaciones 
                            que sean atractivas, intuitivas y que ofrezcan una experiencia de usuario excepcional.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
