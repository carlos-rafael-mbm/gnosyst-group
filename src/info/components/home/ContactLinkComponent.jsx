import { useNavigate } from "react-router-dom"

export const ContactLinkComponent = () => {

    const navigate = useNavigate()

    const onContact = () => {
        navigate('/contact')
    }

    return (
        <div className="row w-100 bg-primary p-0 m-0 p-lg-5 p-2 mb-5 align-items-center justify-content-center">
            <div className="w-100 text-center d-flex align-items-center justify-content-center">
                <span className="me-3 text-white h2">Contacta ahora con nosotros y recibe una promoción imperdible</span>
                <button className="btn btn-info btn-lg" onClick={onContact}>Contactar</button>
            </div>
        </div>
    )
}