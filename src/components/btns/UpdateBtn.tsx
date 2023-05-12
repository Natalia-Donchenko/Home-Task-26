import { useAppDispatch } from "../../hook";
import { editTodo } from "../../store/todoSlice";

interface IUpdateBtnProps {
  text: string,
  setState: React.Dispatch<React.SetStateAction<any>>,
  state: any,
  id: string,
  setEditing: React.Dispatch<React.SetStateAction<boolean>>,
}


const UpdateBtn: React.FC<IUpdateBtnProps> = ({ text, setState, state, id, setEditing }) => {
  
  const dispatch = useAppDispatch();

  console.log(id)

  const edit = () =>{
    if (text === '') {
      setState(state);
      return;
    }
    
    dispatch((editTodo(text, id)));
    // dispatch((editTodo(id)));
    setEditing(false);
    
 };

  return (
    <button 
      type='button' 
      className="editing-btn addTask-btn" 
      onClick={edit}
    >
      update
    </button>
  );
};

export default UpdateBtn;