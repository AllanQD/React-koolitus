//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
     <img className="pilt" src='https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562246977/autoexpress/2018/10/bmw_z1_1_0.jpg' alt="Nobe Elektriauto"/>
     <button className="nupp">Vajuta</button>
<p>tekst</p>
<div className="tekst">Tekst2</div>

<Routes>
<Route path="" element={ <div>Tere</div> }/>
<Route path="esindused" element={ <div>10  esindust</div> }/>
<Route path="arikliendile" element={ <div>Ärikliendile</div> }/>
<Route path="osta-kinkekaart" element={ <div>Kinkekaardi ostmine</div> }/>
  
</Routes>

    </div>
  );
}

export default App;
