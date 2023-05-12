import CanselBtn from "./btns/CanselBtn";
import UpdateBtn from "./btns/UpdateBtn";
import { ChangeEvent } from "react"


interface IEditTodoProps {
  setState: React.Dispatch<React.SetStateAction<any>>,
  state: any,
  setEditing: React.Dispatch<React.SetStateAction<boolean>>,
  isEditing: boolean,


}

const EditTodo: React.FC<IEditTodoProps> = ({ setState, state, setEditing, isEditing}) => {


  const { text, id } = state;
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setState({...state, [e.target.name]: e.target.value});
  };

  return (
    <div className="addTask">
      <input 
        className="task-input h"
        type='text' 
        value={text} 
        name='text' 
        onChange={handleChange}
      />

      <div className="edit-list-buttons">
        <UpdateBtn 
          text={text} 
          setState={setState} 
          state={state} 
          id={id} 
          setEditing={setEditing}
        />

        <CanselBtn 
          setEditing={setEditing} 
          isEditing={isEditing}
        />
      </div>   
    </div>
  );
};

export default EditTodo;