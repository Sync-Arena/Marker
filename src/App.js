import { useState, useEffect } from 'react';
import Input from './Components/input/Input';
import Output from './Components/output/Output';
import Header from './Components/header/Header';
import './App.css';

function App() {
  const [inputContent, setInputContnet] = useState("");
  const [isDark, setIsDark] = useState(0);

  const handleContentChange = (e) => {
    setInputContnet(e.target.value);
  }

  const setDark = () => {
    console.log(isDark);
    document.querySelector("body").setAttribute('theme', 'dark');
    window.localStorage.setItem('theme', JSON.stringify('dark'));
    setIsDark(1);
  }

  const setLight = () => {
    console.log(isDark);
    document.querySelector("body").setAttribute('theme', 'light');
    window.localStorage.setItem('theme', JSON.stringify('light'));
    setIsDark(0);
  }

  useEffect(() => {
    try {
      let theme = JSON.parse(window.localStorage.getItem('theme'));
      if (theme === 'dark')setDark();
    }
    catch {
      console.error("Error while retrieving theme from localStorage");
    }
  }, []);

  return (
    <div className="App">
        <Header isDark={isDark} setDark={setDark} setLight={setLight}/>
        <div className='container'>
          <Output content={inputContent} isDark={isDark}/>
          <div className='separator' ></div>
          <Input setContent={(e) => handleContentChange(e)}/>
        </div>
    </div>
  );
}

export default App;
