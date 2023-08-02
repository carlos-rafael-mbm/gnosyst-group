import bannerDesktop from "../../assets/banner-desktop.png"
import aTuMedida from "../../assets/a-tu-medida.png"
import desktop from "../../assets/desktop.jpg"
import strategy from "../../assets/strategy.png"
import { useEffect } from "react"

export const DesktopPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0) // Hace scroll al inicio de la página cuando el componente se monta
    }, [])

    return (
        <>
            <div>
                <img src={bannerDesktop} width={'100%'} />
            </div>
            <div className="row w-100 p-0 m-0">
                <div className="col-lg-9 col-md-7 col-sm-12 row py-2 px-5 m-0 align-items-center justify-content-center">
                    <div className="col-auto text-center">
                        <div className='title-desktop text-primary mb-2'>Potentes soluciones a medida para tu negocio</div>
                        <p className="text-desktop text-info">
                            En Gnosyst Group, nos enorgullecemos de ofrecer un desarrollo de software de escritorio 
                            personalizado que se adapta perfectamente a las necesidades específicas de tu empresa. Nuestro 
                            equipo de expertos en programación está comprometido con la creación de aplicaciones de alto 
                            rendimiento que funcionen a la perfección en tu entorno local.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-12 p-0 m-0">
                    <img src={aTuMedida} width={'100%'} />
                </div>
            </div>
            <div className="row w-100 p-0 m-0">
                <div className="col-lg-3 col-md-12 col-sm-12 p-0 m-0">
                    <img src={desktop} width={'100%'} />
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 p-5 m-0 bg-primary row align-items-center justify-content-center">
                    <div className="col-auto">
                        <div className='title-desktop-features text-info mb-2'>- Experiencia y eficiencia</div>
                        <p className="text-desktop-features text-white mb-5">
                            Contamos con años de experiencia en el desarrollo de software de escritorio para una variedad 
                            de industrias. Nuestra dedicación a la eficiencia nos permite crear aplicaciones que optimizan 
                            tus procesos internos y mejoran la productividad de tu equipo.
                        </p>
                        <div className='title-desktop-features text-info mb-2'>- Tecnología de vanguardia</div>
                        <p className="text-desktop-features text-white">
                            Utilizamos las últimas tecnologías y metodologías ágiles para asegurarnos de que nuestras 
                            soluciones de software de escritorio sean seguras, estables y fáciles de usar. Nuestro enfoque 
                            en la tecnología de vanguardia garantiza que estarás un paso adelante en el mundo digital.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row w-100 p-0 py-4 m-0">
                <div className="col-lg-8 col-md-12 col-sm-12 row p-0 px-5 m-0 align-items-center justify-content-center">
                    <div className="col-auto text-center">
                        <p className="text-desktop-features text-info">
                            Entendemos que cada empresa es única, por lo que nuestro enfoque se centra en brindarte 
                            soluciones personalizadas. Trabajaremos contigo para comprender tus requisitos y objetivos 
                            comerciales, creando una aplicación de escritorio que se ajuste perfectamente a tus necesidades.
                        </p>
                        <p className="text-desktop-features text-info">
                            Ya sea que necesites una aplicación de gestión empresarial, un software de contabilidad, un 
                            sistema de punto de venta o cualquier otra solución de software de escritorio, estamos preparados 
                            para llevar a cabo cualquier proyecto que tengas en mente.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 p-0 m-0">
                    <img src={strategy} width={'100%'} />
                </div>
            </div>
            <div className="row w-100 bg-primary p-0 m-0 p-lg-5 p-2 mb-5 align-items-center justify-content-center">
                <div className="w-100 text-center d-flex align-items-center justify-content-center">
                    <span className="me-3 text-white h3">
                        ¡Nuestro objetivo es tu éxito! Nos apasiona el desarrollo de software y trabajamos incansablemente 
                        para ofrecerte una solución que te ayude a superar tus metas y desafíos empresariales.
                    </span>
                </div>
            </div>
        </>
    )
}
