import { useState } from 'react';
import Input from './Components/input/Input';
import Output from './Components/output/Output';
import './App.css';

function App() {

  const [inputContent, setInputContnet] = useState("");

  const handleContentChange = (e) => {
    setInputContnet(e.target.value);
  }

  return (
    <div className="App">
        <Input setContent={(e) => handleContentChange(e)}/>
        <Output content={inputContent}/>
    </div>
  );
}

export default App;
