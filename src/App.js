
import './App.css';
// import Hello from './components/Hello';
// import Answer from './components/Answer1';
 import Mobile from './components/Mobile';
 import Manufacture from './components/Manufacture';
function App() {
   
  return (
    <div className="App">
{/*       
        <Hello></Hello>
         <Answer name="Ankita" place="India"/>
         <Answer name="Angel" place="India"/>
         <Answer name="Anu" place="India"/> */}

         <Mobile/>
          <li>Android</li>
          <li>Blackberry</li>
          <li>i Phone</li>
          <li>Windows Phone</li>
          
          <Manufacture/>
          <li>Samsung</li>
          <li>HTC</li>
          <li>Micromax</li>
          <li>Apple</li>

    </div>
  );
}

export default App;
