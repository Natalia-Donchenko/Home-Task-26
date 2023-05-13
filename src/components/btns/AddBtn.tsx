import { useAppDispatch } from "../../hook";
import { addTodo } from "../../store/todoSlice";

interface IAddBtnProps {
  setTodo: React.Dispatch<React.SetStateAction<{
    text: string;
  }>>;
  todo: { text: string };
  text: string;
};

const AddBtn: React.FC<IAddBtnProps> = ({ setTodo, todo, text }) => {
  
  const dispatch = useAppDispatch();

  const add = (): void => {
    if(text === "") {
      setTodo({...todo});
    };
    
    dispatch(addTodo(text));
    setTodo({...todo, text: ""});
  };
  return (
    <button 
      type="button" 
      className="addTask-btn"
      onClick={add}
    >
      add
    </button>
  );
};

export default AddBtn;