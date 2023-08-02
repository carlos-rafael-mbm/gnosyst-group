import { Icon } from '@mdi/react';
import { mdiApplicationBracketsOutline, mdiAutorenew, mdiFaceAgent, mdiFinance, mdiHumanMaleBoard, mdiWebCheck } from '@mdi/js';

export const ServiceComponent = () => {

    return (
        <>
            <div className="row w-100 p-0 m-0 py-4">
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 m-0">
                    <div className="row m-0 align-items-center justify-content-center" style={{height: '150px'}}>
                        <div className="w-75 col-auto d-flex">
                            <div className="text-center" style={{width: '30%'}}>
                                <Icon path={mdiApplicationBracketsOutline} size={'4rem'} className='text-primary' />
                            </div>
                            <div style={{width: '70%'}}>
                                <div className='title-service text-primary fw-bold'>Fácil integración</div>
                                <p>Sistemas adaptables a tus necesidades</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 m-0">
                    <div className="row m-0 align-items-center justify-content-center" style={{height: '150px'}}>
                        <div className="w-75 col-auto d-flex">
                            <div className="text-center" style={{width: '30%'}}>
                                <Icon path={mdiAutorenew} size={'4rem'} className='text-primary' />
                            </div>
                            <div style={{width: '70%'}}>
                                <div className='title-service text-primary fw-bold'>Mejora continua</div>
                                <p>Evolucionamos contigo mediante nuestras actualizaciones</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 m-0">
                    <div className="row m-0 align-items-center justify-content-center" style={{height: '150px'}}>
                        <div className="w-75 col-auto d-flex">
                            <div className="text-center" style={{width: '30%'}}>
                                <Icon path={mdiWebCheck} size={'4rem'} className='text-primary' />
                            </div>
                            <div style={{width: '70%'}}>
                                <div className='title-service text-primary fw-bold'>Cree en TI</div>
                                <p>Encuentra tu mejor alternativa digital</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 m-0">
                    <div className="row m-0 align-items-center justify-content-center" style={{height: '150px'}}>
                        <div className="w-75 col-auto d-flex">
                            <div className="text-center" style={{width: '30%'}}>
                                <Icon path={mdiFaceAgent} size={'4rem'} className='text-primary' />
                            </div>
                            <div style={{width: '70%'}}>
                                <div className='title-service text-primary fw-bold'>Soporte</div>
                                <p>No estás solo. Asistencia técnica inmediata</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 m-0">
                    <div className="row m-0 align-items-center justify-content-center" style={{height: '150px'}}>
                        <div className="w-75 col-auto d-flex">
                            <div className="text-center" style={{width: '30%'}}>
                                <Icon path={mdiFinance} size={'4rem'} className='text-primary' />
                            </div>
                            <div style={{width: '70%'}}>
                                <div className='title-service text-primary fw-bold'>Experiencia de usuario</div>
                                <p>Brindamos una experiencia agradable para tus usuarios</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 m-0">
                    <div className="row m-0 align-items-center justify-content-center" style={{height: '150px'}}>
                        <div className="w-75 col-auto d-flex">
                            <div className="text-center" style={{width: '30%'}}>
                                <Icon path={mdiHumanMaleBoard} size={'4rem'} className='text-primary' />
                            </div>
                            <div style={{width: '70%'}}>
                                <div className='title-service text-primary fw-bold'>Conoce tu aplicación</div>
                                <p>Capacitaciones remotas o presenciales</p>
                            </div>
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