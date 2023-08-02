import { useNavigate } from "react-router-dom"
import systemsDevelopment from "../../../assets/systems_development.jpg"
import webDesign from "../../../assets/web-design.jpg"
import people from "../../../assets/people.jpg"
import teamWork from "../../../assets/teamwork.jpg"
import { Mailer } from "../Mailer"

export const DetailComponent = () => {

    const navigate = useNavigate()

    const onAbout = () => {
        navigate('/about')
    }

    return (
        <>
            <div className="row w-100 p-0 m-0 py-4">
                <div className="col-12 px-5 m-0 mb-5">
                    <div className="row m-0 px-lg-5 px-md-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className='title-detail text-primary text-justify fw-bold'>Desarrollo de sistemas</div>
                            <p>Trabajamos de cerca contigo para comprender tus procesos y requisitos empresariales, y 
                                luego crear sistemas personalizados que optimizan tus operaciones y potencian tu productividad. 
                                Ya sea que necesites un sistema de gestión interna, un sistema de seguimiento de ventas o un 
                                sistema de automatización, estamos preparados para desarrollar soluciones robustas y escalables 
                                que impulsen tu eficiencia empresarial</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 p-lg-3">
                            <img className="rounded-4 shadow" src={systemsDevelopment} width={'100%'} />
                        </div>
                    </div>
                </div>
                <div className="col-12 px-5 m-0 mb-5">
                    <div className="row m-0 px-lg-5 px-md-5 align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 p-lg-3">
                            <img className="rounded-4 shadow" src={webDesign} width={'100%'} />
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className='title-detail text-primary text-justify fw-bold'>Desarrollo de sitios web</div>
                            <p>Ofrecemos servicios de desarrollo de sitios web profesionales y atractivos que reflejan la 
                                identidad de tu marca y conectan con tu audiencia en línea. Ya sea que necesites un sitio web 
                                corporativo, un blog personal o una tienda en línea, estamos preparados para desarrollar un 
                                sitio web a medida que cumpla con tus necesidades y te ayude a alcanzar tus objetivos 
                                en línea</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 px-5 m-0 mb-5">
                    <div className="row m-0 px-lg-5 px-md-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className='title-detail text-primary text-justify fw-bold'>Tecnología para todos</div>
                            <p>Comprendemos que cada industria tiene necesidades y desafíos únicos, y nuestro objetivo es 
                                proporcionar soluciones tecnológicas personalizadas que impulsen el éxito de tu negocio, sin 
                                importar el rubro al que pertenezcas.
                                Nuestro enfoque versátil nos permite abordar una amplia gama de proyectos y colaborar con 
                                empresas en diversas áreas, como servicios financieros, salud, educación, comercio electrónico, 
                                turismo, manufactura y muchos otros. No importa si eres una startup emergente o una empresa 
                                establecida, estamos preparados para enfrentar los desafíos de tu industria y ayudarte a 
                                alcanzar tus metas.</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 p-lg-3">
                            <img className="rounded-4 shadow" src={people} width={'100%'} />
                        </div>
                    </div>
                </div>
                <div className="col-12 px-5 m-0">
                    <div className="row m-0 px-lg-5 px-md-5 align-items-center justify-content-center">
                        <div className={`col-12 ${window.innerWidth > 768 ? "px-6" : "" }`}>
                            <div className='title-detail text-primary text-center fw-bold mb-2'>¿Por qué confiar en nosotros?</div>
                            <p className="justify-paragraph">Confía en nosotros para satisfacer tus necesidades tecnológicas con soluciones innovadoras y de 
                                calidad. Nos destacamos por nuestra experiencia y compromiso en el desarrollo de software y 
                                sitios web personalizados. Nuestro equipo altamente capacitado trabaja con pasión y dedicación 
                                para ofrecerte resultados excepcionales. Nos esforzamos por comprender tus metas y requisitos, 
                                y nos comprometemos a superar tus expectativas en cada proyecto. Con nosotros, recibirás atención 
                                personalizada, comunicación transparente y un enfoque centrado en el éxito de tu negocio.</p>
                        </div>
                        <div className={`col-12 ${window.innerWidth > 768 ? "px-6" : "" }`}>
                            <img className="rounded-4 shadow" src={teamWork} width={'100%'} />
                        </div>
                        <div className="col-12 text-center mt-3">
                            <button className="btn btn-primary text-white fw-bold" style={{fontSize: '1.5rem'}} onClick={onAbout}>Conócenos</button>
                        </div>
                    </div>
                    <div className="row m-0 mt-4 align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <Mailer />
                        </div>
                    </div>
                </div>
                <div className="col-12 row p-0 m-0 pt-5 align-items-center justify-content-center">
                    <hr className='w-75 text-center text-primary custom-hr' />
                </div>
            </div>
        </>
    )
}