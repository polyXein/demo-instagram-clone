

import React from 'react';
import '../styles/home/Summaryphoto.css';


function Summaryphoto(){

    return(
        
        <React.Fragment>

        
        
        <div className='container__summaryphoto'>
        
                <button className='container__emoji'>
                        <div className='happyface'>
                            <div className='decoracion_emoji'></div>
                        </div>  
                </button>
                        
                <div className=''>
                    <input className='input__commentary' type="text" placeholder="Añade un comentario"  />
              
                </div>

                <div className='button__publicar'>
                    <input className='input__publication' value='Publicar' type="button"/>
                </div>

        </div>


        </React.Fragment>

        );


        
}
export { Summaryphoto}