import React from 'react';
import '../styles/home/Personhistory.css'


const Personhistory = () =>{

    const styles = {
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };

    return (

        <div className='body'>
          



                <button className='story'>
                    <div className='profile'>
                        <img 
                        style={styles}
                        src="https://images.unsplash.com/photo-1653299832314-5d3dc1e5a83c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500" />
                    </div>
                    <div className='title'>
                        _nicolaas02   
                    </div>
                </button>
                
                <button className='story'>
                    <div className='profile'>
                        <img 
                        style={styles}
                        src="https://images.unsplash.com/photo-1653260137243-2b3daabf9aab?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500" />
                    </div>
                    <div className='title'>
                        _nicolaas02   
                    </div>
                </button>
                <button className='story'>
                    <div className='profile'>
                        <img 
                        style={styles}
                        src="https://images.unsplash.com/photo-1653260137243-2b3daabf9aab?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500" />
                    </div>
                    <div className='title'>
                        _nicolaas02   
                    </div>
                </button>

            



        </div>

    );

}

export {Personhistory} ;