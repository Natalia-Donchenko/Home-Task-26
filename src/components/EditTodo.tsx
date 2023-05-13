import CanselBtn from "./btns/CanselBtn";
import UpdateBtn from "./btns/UpdateBtn";
import { ChangeEvent } from "react";

interface IEditTodoProps {
  setTodo: React.SetStateAction<any>,
  todo: any,
  setEditing: React.Dispatch<React.SetStateAction<boolean>>
  isEditing: boolean,
};

const EditTodo: React.FC<IEditTodoProps> = ({ setEditing, isEditing, setTodo, todo}) => {
  
  const { text, id } = todo;
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo({...todo, [e.target.name]: e.target.value});
  };

  return (
    <div className="addTask">
      <input 
        className="task-input h"
        type="text" 
        value={text} 
        name="text" 
        onChange={handleChange}
      />

      <div className="edit-list-buttons">
        <UpdateBtn 
          text={text} 
          setTodo={setTodo} 
          todo={todo} 
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