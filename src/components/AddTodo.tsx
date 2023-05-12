import React, { useState } from 'react';
import AddBtn from './btns/AddBtn';
import { ChangeEvent } from "react"

const AddTodo: React.FC = () => {
  const [ state, setState ] = useState({
    text: ''
  });
  const { text } = state;
   
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setState({...state, [e.target.name]: e.target.value});
  };

  return  (
    <>
    <div className='addTask'>
      <input 
        className="task-input"
        placeholder='What do you want to do?'
        type='text' 
        value={text} 
        name='text' 
        onChange={handleChange} 
      />

      <AddBtn 
        setState={setState}
        state={state} 
        text = {text}
      />
    </div>
    </>
  );
};

export default AddTodo;
