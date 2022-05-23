import React from 'react';
import '../styles/home/publication_header.css'


/* ancho 600px photo publication */

function Publicationheader(){
        const styles = {
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              };

        return(

            
            <React.Fragment>
                <div className='container_headerpublication'>

                <div className='container_info_profile'>
                        <div className='profile'>
                                <img
                                style={styles} 
                                src="https://images.unsplash.com/photo-1653306638703-0e294f5b64fd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500" />
                        </div>
                        <div className='container_nombre_location'>
                                <h2 className='name_cuenta_insta'>433</h2>
                                <p className='location_photo'>Palermo, italy</p>
                        </div>
                </div>
                 <div className='opciones_photo'>
                            <button className='options'>...</button>
                  </div>
                </div>

            </React.Fragment>

        );
}

export {Publicationheader};