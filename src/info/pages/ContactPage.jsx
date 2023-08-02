import contact from '../../assets/contact.png'
import { Mailer } from '../components/Mailer'
import { Icon } from '@mdi/react'
import { mdiPhone, mdiEmail, mdiClockOutline, mdiFacebook } from '@mdi/js'
import nameEnterpriseRedBgRemoved from '../../assets/nombre-empresa-red-removebg.png'
import { useEffect } from 'react'

export const ContactPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0) // Hace scroll al inicio de la página cuando el componente se monta
    }, [])

    return (
        <>
            <div>
                <img src={contact} width={'100%'} />
            </div>
            <div className="row w-100 p-0 py-5 m-0">
                <div className="col-lg-6 col-md-12 col-sm-12 p-0 m-0 align-items-center justify-content-center">
                    <h2 className='text-center text-primary fw-bold'>Contacta con un asesor</h2>
                    <div className="w-100 p-0 m-0 my-4 row align-items-center justify-content-center">
                        <div className="col-10">
                            <p style={{fontSize: '1.2rem', textAlign: 'justify'}}>Con gusto te escucharemos y encontraremos la solución adecuada a tus necesidades</p>
                        </div>
                    </div>
                    <div className="w-100 p-0 m-0 my-4 row align-items-center justify-content-center">
                        <div className="col-12 text-center">
                            <Icon path={mdiPhone} size={'1.5rem'} className='text-primary me-2' />
                            <span>952441897</span>
                        </div>
                    </div>
                    <div className="w-100 p-0 m-0 my-4 row align-items-center justify-content-center">
                        <div className="col-12 text-center">
                            <Icon path={mdiEmail} size={'1.5rem'} className='text-primary me-2' />
                            <span>carlos.rafael.mbm@gmail.com</span>
                        </div>
                    </div>
                    <div className="w-100 p-0 m-0 my-4 row align-items-center justify-content-center">
                        <div className="col-12 text-center">
                            <Icon path={mdiFacebook} size={'1.5rem'} className='text-primary me-2' />
                            <span><a href="https://www.facebook.com/gnosystgroup" target='_blank'>gnosystgroup</a></span>
                        </div>
                    </div>
                    <div className="w-100 p-0 m-0 my-4 row align-items-center justify-content-center">
                        <div className="col-12 text-center">
                            <Icon path={mdiClockOutline} size={'1.5rem'} className='text-primary me-2' />
                            <span>Lun. a Vie. 8:00 a 6:30 | Sab. 9:00 a 1:00 pm</span>
                        </div>
                    </div>
                    <div className="w-100 p-0 m-0 my-5 row align-items-center justify-content-center">
                        <div className="col-12 text-center">
                            <img src={nameEnterpriseRedBgRemoved} alt='Gnosyst Group' width='50%'/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 row p-0 px-5 m-0 align-items-center justify-content-center">
                    <div className="col-12 text-center">
                        <Mailer />
                    </div>
                </div>
            </div>
        </>
    )
}