import React from 'react';
import  '../styles/home/Header.css'
import heartsolid from '../assets/heartsolid.svg';
import magnifyingglasssolid from '../assets/magnifyingglasssolid.svg'

function Header(){
    
    return(
        <React.Fragment>
            <div className='container_header'>


                <a className=''>
                   {/*  <img/> */}
                   <p className='instagram'>instagram</p>
                </a>



            <div className='search_container'>
                <img className='' src={magnifyingglasssolid} />
                <input className='input_search' placeholder='Busca' type="search"/>
            </div>


                <div className='navegation_container'>
                    <a  href='' className=''>
                        <img src={heartsolid} />
                    </a>

                    <a href='' className=''>
                        <img src={heartsolid} />
                    </a>

                    <a href='' className=''>
                        <img src={heartsolid} />
                    </a>

                    <a href='' className=''>
                        <img src={heartsolid}/>
                    </a>

                    <a href='' className=''>
                         <img src={heartsolid}/>
                    </a>

{/*  */}



            {/* foto del usuario */}
                    <span className='photo_profile'>
                        <img className='' src='' />
                    </span>

                </div>

            </div>
        </React.Fragment>
    );
}
export {Header};