import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

export const Mailer = () => {

    const sendEmail = (event) => {
        event.preventDefault()
        Swal.showLoading()
        emailjs.sendForm('service_ey76tcc', 'template_m0cnmj7', event.target, '4iuIpDHr-AWAsRird')
            .then((response) => {
                if (response.status === 200) {
                    Array.from(document.querySelectorAll("input")).forEach(
                        input => (input.value = "")
                    )
                    Array.from(document.querySelectorAll("textarea")).forEach(
                        input => (input.value = "")
                    )
                    Swal.fire({
                        title: 'Listo! Gracias',
                        text: 'Tu mensaje ha sido enviado a Gnosyst Group, muy pronto nos pondremos en contacto contigo',
                        confirmButtonColor: '#FF3C00',
                        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Enviado!',
                        icon: 'success'
                    })
                } else {
                    Swal.fire({
                        title: 'Oops! Sucedió algo inesperado',
                        text: 'Tu mensaje no se envió. ' + response.text,
                        confirmButtonColor: '#FF3C00',
                        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Enviado!',
                        icon: 'error'
                    })
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Oops! Sucedió algo inesperado',
                    text: 'Tu mensaje no se envió. Error en respuesta de EmailJS',
                    confirmButtonColor: '#FF3C00',
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Enviado!',
                    icon: 'error'
                })
            })
    }

    return (
        <form onSubmit={sendEmail} className='border rounded-4 p-4 bg-primary bg-opacity-50 shadow'>
            <fieldset>
                <legend className='text-center fw-bold'>¿Qué tal si nos reunimos?</legend>
                <div className="mb-3">
                    <label className="form-label">¿Cuál es tu nombre?</label>
                    <input type="text" name="inputName" className="form-control" placeholder="Tu nombre" />
                </div>
                <div className="mb-3">
                    <label className="form-label">¿Cuál es tu número de teléfono?</label>
                    <input type="text" name="inputPhoneNumber" className="form-control" placeholder="Tu celular" />
                </div>
                <div className="mb-3">
                    <label className="form-label">¿Cuál es tu email?</label>
                    <input type="text" name="inputEmail" className="form-control" placeholder="Tu email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cuéntanos tu requerimiento</label>
                    <textarea className="form-control" name="inputMessage" rows="3" placeholder="Cuéntanos con detalle"></textarea>
                </div>
                <button type="submit" className="btn btn-primary text-white">Enviar</button>
            </fieldset>
        </form>
    )
}
