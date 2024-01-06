import { useState } from 'react';
import Input from './Components/input/Input';
import Output from './Components/output/Output';
import Header from './Components/header/Header';
import './App.css';

function App() {

  const [inputContent, setInputContnet] = useState("");

  const handleContentChange = (e) => {
    setInputContnet(e.target.value);
  }

  return (
    <div className="App">
        <Header />
        <div className='container'>
          <Input setContent={(e) => handleContentChange(e)}/>
          <div style={{ borderRight: '2px solid #FFA116'}}></div>
          <Output content={inputContent}/>
        </div>
    </div>
  );
}

export default App;
