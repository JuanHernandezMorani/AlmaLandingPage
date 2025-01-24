import '../../style/form.css';
import ubicacion from '../../imgs/others/ubicacion.png'

export default function Form(){
    return (
        <div className='form-container'>
            <div className='form-info'>
            <h3 className='form-h3'>DATOS OFICINAS</h3>
                <div className='form-ub-1'>
                    <img src={ubicacion} alt='ubicacion' className='form-img-1'/> 
                        <ul className='form-c'>
                            <li className='form-data'>Julio A. Roca 2420 {'('}B7602GUX{')'}</li>
                            <li className='form-data'>Mar del Plata, Buenos Aires</li>
                        </ul>
                </div>
                <div className='form-ub-2'>
                    <img src={ubicacion} alt='ubicacion' className='form-img-2'/> 
                        <ul className='form-c'>
                            <li className='form-data'>R. Escalada de San Martin 2749</li>
                            <li className='form-data'>OF. 275 {'('}C1406HCC{')'}</li>
                            <li className='form-data'>CABA, Buenos Aires, Argentina</li>
                        </ul>
                </div>
                <h3 className='form-h3'> TELÉFONOS</h3>
                <ul className='info-list-tel'>
                    <li className='form-data'>M: +54 9223 304 5424</li>
                    <li className='form-data'>M: +54 911 2468 2389</li>
                </ul>
                <h3 className='form-h3'> MAIL</h3>
                <a className='form-mail' href="mailto:info@almabtl.com">info@almabtl.com</a>
            </div>
        </div>
    );
}