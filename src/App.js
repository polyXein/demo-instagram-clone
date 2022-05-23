import {Header} from './components_home/Header'
import {Personhistory} from './components_home/Personhistory'
import {Profileuser } from './components_home/Profileuser'
import {Suggestionperson} from './components_home/Suggestionperson'
import {Footer} from '../src/components_home/Footer'
 import {Publicationheader} from './components_home/Publicationheader'
import { Summaryphoto } from './components_home/Summaryphoto'
import { Detailsphoto } from './components_home/Detailsphoto'



function App() {
  return (
    <div className="App">
        <Header/>
        <Personhistory/>
        <Profileuser />
        <Suggestionperson />
    <Summaryphoto/>

     <Publicationheader/>
    <Detailsphoto/>

        <Footer/>
    </div>
  );
}

export default App;
