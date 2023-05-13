import { useAppDispatch } from "../../hook";
import { deleteTodo } from "../../store/todoSlice";

interface IDeleteBtnProps {
  id: string
};

const DeleteBtn: React.FC<IDeleteBtnProps> = ({ id }) => {

  const dispatch = useAppDispatch(); 

  return (
    <button
      type="button"
      className="optional-btn"
      onClick={() => dispatch(deleteTodo(id))}
    >
      delete
    </button>
  );
};

export default DeleteBtn;