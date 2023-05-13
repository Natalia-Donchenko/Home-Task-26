import { useAppDispatch } from "../../hook";
import { editTodo } from "../../store/todoSlice";

interface IUpdateBtnProps {
  text: string,
  setTodo: React.Dispatch<React.SetStateAction<{}>>
  todo: {},
  id: string,
  setEditing: React.Dispatch<React.SetStateAction<boolean>>,
};

const UpdateBtn: React.FC<IUpdateBtnProps> = ({ text, setTodo, todo, id, setEditing }) => {
  
  const dispatch = useAppDispatch();

  const edit = () =>{
    if (text === "") {
      setTodo({todo});
      return;
    };
    
    dispatch((editTodo({ text, id })));
    setEditing(false);
  };

  return (
    <button 
      type="button" 
      className="editing-btn addTask-btn" 
      onClick={edit}
    >
      update
    </button>
  );
};

export default UpdateBtn;