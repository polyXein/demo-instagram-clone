import React from 'react';
import '../styles/home/Detailsphoto.css'
import heart from '../assets/heartsolid.svg'
import two from '../assets/facebook-messenger-brands.svg'
import tres from '../assets/paper-plane-solid.svg'
import cuatro from '../assets/bookmark-solid.svg'
/* import heart from '../assets/bookmark-solid.svg  '
/* import cinco from '../assets/magnifyingglasssolid.svg'
import seis from '../assets/house-solid.svg'
import siete from '../assets/paper-plane-solid.svg' */

function Detailsphoto (){


    return(

        <React.Fragment>

        <div className='container__reactions'>

                 <div className='reactions'>

                    <div className=''>
                        <button className='button__like'>
                            <img src={heart} />
                        </button>
                    </div>
                    <div className=''>
                        <button className='button__commentary'>
                            <img src={two} />
                        </button>
                    </div>
                    <div className=''>
                        <button className='button__send'>
                          <img src={tres} />
                        </button>
                    </div>

                </div>

                    <div className='container_save'>
                        <div className='button__saved'>
                            <img src={cuatro} />
                        </div>
                    </div>
        </div>
        

        <div className='container__video-reproductions'>
            <div className=''>
                <button className=''>
                     <p>6.797 reproducciones</p>
                </button>
            </div>
        </div>

        <div className='container__like-count'>

                <div className=''>
                    <img className='' />
                </div>
                <div className=''>
                    <p className=''>Les gusta a</p>
                    <a>lauraaaam___ <span>y</span></a>
                    <a>45 personas más</a>
                </div>
        </div>

        <div className='container__description-short'>
            <div>
                <a>_valntne</a>
            </div>
            <div>
                <p>En la inmensidad de la nada</p>
            </div>
        </div>
        <div className='container__time-count'>
            <p>Hace 4 horas</p>
        </div>

        </React.Fragment>

    );
}
export {Detailsphoto};