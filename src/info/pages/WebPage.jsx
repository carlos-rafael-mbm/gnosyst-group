import bannerWeb from '../../assets/banner-web.png'
import videoWeb from '../../assets/web-custom.mp4'
import web from "../../assets/web.jpg"
import webDesign from "../../assets/web-design.jpg"
import webDesign2 from "../../assets/webdesign.jpg"
import sloganWeb from "../../assets/slogan-web.png"
import { useEffect } from 'react'

export const WebPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0) // Hace scroll al inicio de la página cuando el componente se monta
    }, [])

    return (
        <>
            <div>
                <img src={bannerWeb} width={'100%'} />
            </div>
            <div className="row w-100 p-0 m-0">
                <div className="col-lg-3 col-md-5 col-sm-12 p-0 m-0">
                    <video loop autoPlay muted width={'100%'}>
                        <source src={videoWeb} type="video/mp4" ></source>
                    </video>
                </div>
                <div className="col-lg-9 col-md-7 col-sm-12 row p-0 px-5 m-0 align-items-center justify-content-center">
                    <div className="col-auto text-center">
                        <div className='title-desktop text-primary mb-2'>Aplicaciones web: Soluciones Web Dinámicas y Personalizadas</div>
                        <p className="text-desktop text-info">
                            En Gnosyst Group somos expertos en el desarrollo de aplicaciones web que llevan la funcionalidad 
                            y la interactividad de tu negocio al siguiente nivel. Nos enfocamos en crear aplicaciones web 
                            dinámicas y personalizadas que se adaptan perfectamente a tus necesidades y brindan una 
                            experiencia excepcional a tus usuarios.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row w-100 p-0 m-0">
                <div className="col-lg-8 col-md-12 col-sm-12 p-5 m-0 bg-primary row align-items-center justify-content-center">
                    <div className="col-auto">
                        <div className='title-desktop-features text-info mb-2'>- Experiencia y profesionalismo</div>
                        <p className="text-desktop-features text-white mb-5">
                            Con una amplia experiencia en el desarrollo de aplicaciones web para diversas industrias, nuestro equipo tiene el 
                            conocimiento y la habilidad necesarios para crear soluciones tecnológicas que destaquen y generen resultados positivos 
                            para tu negocio.
                        </p>
                        <div className='title-desktop-features text-info mb-2'>- Tecnología moderna y segura</div>
                        <p className="text-desktop-features text-white">
                            Utilizamos tecnologías modernas y seguras para el desarrollo de aplicaciones web, garantizando 
                            que tu negocio esté respaldado por un software confiable y escalable. Nuestro enfoque en la 
                            seguridad y el rendimiento asegura que tus aplicaciones web funcionen sin problemas y estén 
                            protegidas contra amenazas cibernéticas.
                        </p>
                        <div className='title-desktop-features text-info mb-2'>- Desarrollo ágil y colaborativo</div>
                        <p className="text-desktop-features text-white">
                            Nuestro enfoque ágil y colaborativo te permite estar involucrado en cada paso del proceso de 
                            desarrollo. Trabajamos de cerca contigo para comprender tus necesidades y objetivos, asegurándonos 
                            de que la aplicación web resultante sea exactamente lo que deseas.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 p-0 m-0">
                    <img src={web} width={'100%'} />
                </div>
            </div>
            <div className="row w-100 p-0 m-0">
                <div className="col-lg-3 col-md-5 col-sm-12 p-0 m-0">
                    <img src={webDesign} width={'100%'} />
                </div>
                <div className="col-lg-9 col-md-7 col-sm-12 row p-0 px-5 m-0 align-items-center justify-content-center">
                    <div className="col-auto text-center">
                        <div className='title-desktop text-primary mb-2'>Sitios web: Creatividad y funcionalidad en cada píxel</div>
                        <p className="text-desktop text-info">
                            Cada sitio web es una oportunidad para contar una historia y marcar una impresión duradera. 
                            Estamos listo para hacer realidad tu visión y crear un sitio web que refleje la identidad de 
                            tu marca y conecte con tus usuarios.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row w-100 p-0 m-0">
                <div className="col-lg-8 col-md-12 col-sm-12 p-5 m-0 bg-primary row align-items-center justify-content-center">
                    <div className="col-auto">
                        <div className='title-desktop-features text-info mb-2'>- Diseño personalizado y único</div>
                        <p className="text-desktop-features text-white mb-5">
                            Cada sitio web que diseñamos es único y diseñado a medida de tus necesidades y objetivos. Desde el 
                            diseño de la interfaz de usuario hasta la selección de colores y tipografía, nos aseguramos de que 
                            tu sitio web sea verdaderamente representativo de tu empresa.
                        </p>
                        <div className='title-desktop-features text-info mb-2'>- Enfoque en la experiencia del usuario</div>
                        <p className="text-desktop-features text-white">
                            Creamos sitios web que son intuitivos, fáciles de navegar y agradables de usar, lo que garantiza 
                            que tus visitantes tengan una experiencia positiva y se conviertan en clientes leales.
                        </p>
                        <div className='title-desktop-features text-info mb-2'>- Diseño responsivo y adaptativo</div>
                        <p className="text-desktop-features text-white">
                            Todos nuestros sitios web están diseñados para adaptarse a diferentes dispositivos y tamaños de 
                            pantalla. Ya sea que los usuarios accedan desde una computadora de escritorio, una tableta o un 
                            teléfono móvil, tu sitio web se verá y funcionará de manera óptima.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 p-0 m-0">
                    <img src={webDesign2} width={'100%'} />
                </div>
            </div>
            <div className="m-0 my-3">
                <img src={sloganWeb} width={'100%'} />
            </div>
        </>
    )
}
