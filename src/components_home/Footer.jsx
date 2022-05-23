import React, { Fragment } from 'react';
import '../styles/home/Footer.css'
function Footer() 
{
    return (
        <Fragment>
                <div className='container_footer'>
                   <ul className='list_footer'>
                       <li>
                           <a>Informacion </a>
                       </li>
                       <li>
                           <a> Ayuda</a>
                       </li>
                       <li>
                           <a>  Prensa</a>
                       </li>
                       <li>
                           <a>  API </a>
                       </li>
                       <li>
                           <a> Empleo</a>
                        
                       </li>
                       <li>
                           <a> Privacidad</a>
                       </li>
                       <li>
                           <a> Condiciones</a>
                       </li>
                        <li>
                           <a>Ubicaciones</a>
                       </li>
                       <li>
                           <a>Cuentas destacadas</a>
                       </li>
                       <li>
                           <a>Hashtags</a>
                       </li>
                       <li>
                           <a> Idiomas</a>
                       </li> 
                   </ul>

                    <p className='footer_home'>© 2022 Instagram from Meta</p>
                </div>


        </Fragment>
    );
}
export {Footer};