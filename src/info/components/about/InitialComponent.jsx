import team from "../../../assets/team.jpg"
import aboutHeader from "../../../assets/banner-about.png"
import vision from "../../../assets/vision.jpg"
import code from "../../../assets/code.jpg"
import together from "../../../assets/together.jpg"

export const InitialComponent = () => {
    return (
        <>
            <div>
                <img src={aboutHeader} width={'100%'} />
            </div>
            <div className="row w-100 p-0 m-0">
                <div className="col-lg-9 col-md-7 col-sm-12 p-0 m-0 bg-light">
                    <div className={`${window.innerWidth > 768 ? "p-8" : "p-5" }`}>
                        <div className='title-intro text-primary mb-2'>¿Quiénes somos?</div>
                        <p className="text-intro text-info">
                            En Gnosyst Group somos mucho más que una empresa de desarrollo de software. Somos un equipo 
                            apasionado compuesto por mentes curiosas, soñadores tecnológicos y amantes de los desafíos. Nos 
                            enorgullece decir que respiramos código y que convertimos ideas en realidad.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-12 p-0 m-0">
                    <img src={team} width={'100%'} />
                </div>
            </div>
            <div className="row w-100 p-0 m-0">
                <div className="col-lg-6 col-md-12 col-sm-12 p-0 m-0">
                    <div className="col-12 row p-0 m-0 pt-5 align-items-center justify-content-center">
                        <hr className='w-50 text-center text-primary custom-hr' />
                    </div>
                    <div className={`py-4 ${window.innerWidth > 768 ? "px-8" : "px-5" }`}>
                        <p className="text-info">
                            Nuestro viaje comenzó con una visión audaz: cambiar la forma en que las personas interactúan con 
                            la tecnología. Nos adentramos en este emocionante camino, dispuestos a desafiar los límites y 
                            romper las barreras. Desde entonces, hemos estado construyendo soluciones digitales 
                            que marcan la diferencia y generan un impacto positivo en el mundo.
                        </p>
                        <img className="rounded-4 shadow" src={vision} width={'100%'} />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 p-0 m-0">
                    <div className="col-12 row p-0 m-0 pt-5 align-items-center justify-content-center">
                        <hr className='w-50 text-center text-primary custom-hr' />
                    </div>
                    <div className={`py-4 ${window.innerWidth > 768 ? "px-8" : "px-5" }`}>
                        <p className="text-info">
                            Lo que nos impulsa es nuestra pasión por la excelencia. Cada línea de código que escribimos, cada 
                            diseño que creamos y cada interacción que desarrollamos se guía por una búsqueda constante de 
                            perfección. No nos conformamos con lo ordinario; siempre nos esforzamos por lo extraordinario.
                        </p>
                        <img className="rounded-4 shadow" src={code} width={'100%'} />
                    </div>
                </div>
            </div>
            <div className="row w-100 p-0 m-0 py-4">
                <div className="col-lg-4 col-md-12 col-sm-12 p-0 m-0">
                    <img src={together} width={'100%'} style={{marginLeft: 'auto', marginRight: 'auto'}} />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 p-0 m-0 bg-light">
                    <div className="p-5">
                        <div className='title-intro text-primary mb-2'>Ustedes son el centro</div>
                        <p className="text-together text-info">
                            Para nosotros, el desarrollo de software no se trata solo de ceros y unos, sino de crear 
                            experiencias únicas y significativas para nuestros clientes y sus usuarios. Valoramos la 
                            colaboración y creemos en la creación conjunta, trabajando estrechamente contigo para entender 
                            tus necesidades y convertirlas en soluciones tangibles.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}