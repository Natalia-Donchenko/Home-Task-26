import { useAppDispatch } from "../../hook";
import { deleteTodo } from "../../store/todoSlice";

interface IDeleteBtnProps {
  id: string
};

const DeleteBtn: React.FC<IDeleteBtnProps> = ({ id }) => {

  const dispatch = useAppDispatch(); 

  const handleDeleteClick = (): void => {
    dispatch(deleteTodo(id));
  }

  return (
    <button
      type="button"
      className="optional-btn"
      onClick={handleDeleteClick}
    >
      delete
    </button>
  );
};

export default DeleteBtn;