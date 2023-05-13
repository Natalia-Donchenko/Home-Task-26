import React, { useState } from "react";
import AddBtn from "./btns/AddBtn";
import { ChangeEvent } from "react";

interface IAddTodo {
  text: string;
}


const AddTodo: React.FC = () => {
  const [ todo, setTodo] = useState<IAddTodo>({
    text: ""
  });
  const { text } = todo;
   
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>{
    setTodo({...todo, [e.target.name]: e.target.value});
  };

  return  (
    <>
    <div className="addTask">
      <input 
        className="task-input"
        placeholder="What do you want to do?"
        type="text" 
        value={text} 
        name="text" 
        onChange={handleChange} 
      />

      <AddBtn 
        setTodo={setTodo}
        todo={todo} 
        text = {text}
      />
    </div>
    </>
  );
};

export default AddTodo;