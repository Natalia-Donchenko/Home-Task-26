import { useAppDispatch } from "../../hook";
import { addTodo } from "../../store/todoSlice";

interface IAddBtnProps {
  setState: any
  state: any,
  text: string,
}


const AddBtn: React.FC<IAddBtnProps> = ({ setState, state, text }) => {

  const dispatch = useAppDispatch();

  const add = () => {
    if(text === '') {
      setState({...state});
    };
    
    // dispatch(addTodo({newText: text}));
    dispatch(addTodo(text));
    setState({...state, text: ''});
  }
  return (
    <button 
      type='button' 
      className="addTask-btn"
      onClick={add}
    >
      add
    </button>
  );
};

export default AddBtn;