import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import nameEnterprise from '../../assets/nombre-empresa.png'
import nameEnterpriseBgRemoved from '../../assets/nombre-empresa-removebg.png'
import nameEnterpriseRedBgRemoved from '../../assets/nombre-empresa-red-removebg.png'
import { Offcanvas } from "react-bootstrap";

export const Navbar = () => {
    const [colorChange, setColorchange] = useState(false)
    const [newSize, setNewSize] = useState(window.innerWidth)
    const [activeDropdown, setActiveDropdown] = useState(false)
    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const onHome = () => {
        setShow(false)
        navigate("/")
    }

    const onAbout = () => {
        setShow(false)
        navigate("/about")
    }

    const onContact = () => {
        setShow(false)
        navigate("/contact")
    }

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)

    const toggleDropdown = () => {
        setActiveDropdown(!activeDropdown)
    }

    const changeNavbarColor = () => {
        if (window.scrollY >= 20) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };

    const updateSize = () => {
        setNewSize(window.innerWidth)
    }

    window.addEventListener('scroll', changeNavbarColor)
    window.addEventListener("resize", updateSize)

    return (
        <nav className={`navbar p-2 ${colorChange ? 'fixed-top navbar-dark bg-dark bg-opacity-75' : (window.location.hash == '#/' || window.location.hash == '/' || window.location.hash == '' ? 'fixed-top' : 'sticky-top bg-primary')}`}>
            <div className="container-fluid">
                {
                    colorChange ?
                    <>
                        <Link
                            className="navbar-brand" 
                            to="/"
                        >
                            <div className="d-flex align-items-center">
                                {colorChange ?
                                    <img src={nameEnterpriseRedBgRemoved} alt='Gnosyst Group' width='180px'/>
                                :
                                    <img src={nameEnterpriseBgRemoved} alt='Gnosyst Group' width='180px'/>
                                }
                                {newSize <= 1000 || <h5 className="ms-5">Somos la solución a tus negocios digitales</h5>}
                            </div>
                        </Link>
                    </>
                    :
                    window.location.hash == '#/' || window.location.hash == '/' || window.location.hash == '' ?
                        <a className="navbar-brand" href="#">{colorChange ? 'Gnosyst Group' : ''}</a>
                        :
                        <Link
                            className="navbar-brand" 
                            to="/"
                        >
                            <div className="d-flex align-items-center">
                                {colorChange ?
                                    <img src={nameEnterpriseRedBgRemoved} alt='Gnosyst Group' width='180px'/>
                                :
                                    <img src={nameEnterpriseBgRemoved} alt='Gnosyst Group' width='180px'/>
                                }
                                {newSize <= 1000 || <h5 className="ms-5">Somos la solución a tus negocios digitales</h5>}
                            </div>
                        </Link>
                }
                <div className="pt-1">
                    <button className="navbar-toggler" style={{fontSize: '1.5rem', fontWeight: 'bold', border: '2px solid'}} type="button" onClick={handleShow}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-primary text-white">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Conoce nuestro proyecto</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <button 
                                className="btn btn-outline-info m-1 fw-bold text-white"
                                onClick={onHome}
                            >
                                Inicio
                            </button>
                            <button 
                                className="btn btn-outline-info m-1 fw-bold text-white"
                                onClick={onAbout}
                            >
                                Nuestro equipo
                            </button>
                            <button 
                                className="btn btn-outline-info m-1 fw-bold text-white dropdown-toggle"
                                onClick={toggleDropdown}
                            >
                                Nuestros servicios
                            </button>
                            { activeDropdown &&
                                <ul className="list-group list-group-flush bg-primary mx-3">
                                    <li className="list-group-item bg-primary text-white" onClick={handleClose}><Link className="dropdown-item" to="/desktop">Software de escritorio</Link></li>
                                    <li className="list-group-item bg-primary text-white" onClick={handleClose}><Link className="dropdown-item" to="/web">Aplicaciones web</Link></li>
                                    <li className="list-group-item bg-primary text-white" onClick={handleClose}><Link className="dropdown-item" to="/mobile">Aplicaciones móviles</Link></li>
                                    {/* <li className="list-group-item bg-primary text-white" data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="/">Consultoría de software</Link></li>
                                    <li className="list-group-item bg-primary text-white" data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="/">Outsourcing de IT</Link></li> */}
                                </ul>}
                            <button 
                                className="btn btn-outline-info m-1 fw-bold text-white"
                                onClick={onContact}
                            >
                                Contacto
                            </button>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
                {/* <div className="offcanvas offcanvas-end bg-primary text-white" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Conoce nuestro proyecto</h5>
                        <button type="button" className="btn-close text-info" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        
                    </div>
                </div> */}
            </div>
        </nav>
    )
}