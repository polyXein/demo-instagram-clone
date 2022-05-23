import React from 'react';
import '../styles/home/Profileuser.css'


function Profileuser() {


    const styles = {
        width: "40%",
        height: "44%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };

    return(

        <div className='my_profile'>

         

            <button className='perfil'>
                <img
                style={styles} src="https://images.unsplash.com/photo-1653306638703-0e294f5b64fd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500" alt=""/>
            </button>

            <div className='info_profile'>
                <p> _nicolaas02 </p>
                <p>Nicolas Ortiz ⚡</p>
            </div>
            
            <div className='change_profile'>
                    <button>Cambiar</button>
            </div>
        </div>
    )
}

export {Profileuser};