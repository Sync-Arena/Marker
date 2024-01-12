import React, { useEffect, useRef } from 'react';
import '../../style/Input.css';

const Input = (props) => {

  const textAreaRef = useRef();

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  return (
    <div className='input-container'>
      <textarea 
        className='input'
        ref={textAreaRef}
        onChange={(e) => props.setContent(e)}></textarea>
    </div>
  );
}

export default Input;