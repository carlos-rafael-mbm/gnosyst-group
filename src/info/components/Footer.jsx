import { Icon } from '@mdi/react';
import { mdiFacebook, mdiWhatsapp } from '@mdi/js'

export const Footer = () => {
    return (
        <footer className="footer mt-auto">
            <div className="d-flex flex-wrap justify-content-between align-items-center py-3 px-4 border-top bg-info">
                <span className="mb-3 mb-md-0 text-light">Copyright © 2023 Gnosyst Group</span>
                <ul className="nav col-md-6 me-3 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <span className="text-white me-2">Visítanos en</span>
                        <a className="text-body-secondary" href="https://www.facebook.com/gnosystgroup" target='_blank'>
                            <Icon path={mdiFacebook} size={'1.8rem'} className='text-primary' />
                        </a>
                    </li>
                    <li className="ms-3">
                        <span className="text-white me-2">Escríbenos</span>
                        <a className="text-body-secondary" href="https://wa.me/51952441897" target='_blank'>
                            <Icon path={mdiWhatsapp} size={'1.8rem'} className='text-primary' />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}