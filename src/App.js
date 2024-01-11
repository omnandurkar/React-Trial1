// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (  
    <>
    <Navbar title="GearUp"/>

    <div className="container" style={{marginTop:130}}>
    <TextForm TextAreaTitle="Convert Your text into TEXT"/>
    </div>

    </>
      
    
  );

}

export default App;
