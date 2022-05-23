
import React, {Fragment} from 'react';
import '../styles/home/Suggestionperson.css'

function Suggestionperson() { 


    const styles = {
        width: "50%",
        height: "50%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };


    
    return (
        <Fragment>

                <div className="container_suggestion">

                        <button className='photo_suggestion' >
                            <img
                            style={styles} 
                            src="https://images.unsplash.com/photo-1653306638703-0e294f5b64fd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500" alt="" />

                        </button>

                        <div className="names_suggestion">
                            <p>emilymoreno943</p>
                            <p>mauren45_76 y 11 más siguen est...</p>
                        </div>

                         <button className="button_follow">
                                    Seguir
                         </button>


                </div>

               
        </Fragment>

    );
}

export {Suggestionperson};