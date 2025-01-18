import '../../style/form.css';
import ubicacion from '../../imgs/others/ubicacion.png'

export default function Form(){
    return (
        <div className='form-container'>
            <div className='form-info'>
                <h3 className='form-h3' style={{fontSize: 30}}>DATOS OFICINAS</h3>
                <img src={ubicacion} alt='ubicacion' className='form-img-1'/> 
                    <ul className='form-c'>
                        <li style={{fontSize: 25}}>Julio A. Roca 2420 {'('}B7602GUX{')'}</li>
                        <li style={{fontSize: 25}}>Mar del Plata, Buenos Aires</li>
                    </ul>
                <img src={ubicacion} alt='ubicacion' className='form-img-2'/> 
                    <ul className='form-c'>
                        <li style={{fontSize: 25}}>R. Escalada de San Martin 2749</li>
                        <li style={{fontSize: 25}}>OF. 275 {'('}C1406HCC{')'}</li>
                        <li style={{fontSize: 25}}>CABA, Buenos Aires, Argentina</li>
                    </ul>
                <h3 className='form-h3' style={{fontSize: 30}}> TELÉFONOS</h3>
                <ul className='info-list-tel'>
                    <li style={{fontSize: 25}}>M: +54 9223 304 5424</li>
                    <li style={{fontSize: 25}}>M: +54 911 2468 2389</li>
                </ul>
                <h3 className='form-h3' style={{fontSize: 30}}> MAIL</h3>
                <a className='form-mail' href="mailto:info@almabtl.com" style={{fontSize: 25}}>info@almabtl.com</a>
            </div>
        </div>
    );
}