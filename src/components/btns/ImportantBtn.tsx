import { useAppDispatch } from "../../hook";
import { isImportant } from "../../store/todoSlice";


interface IImportantBtnProps {
  id: string,
  done: boolean,
  important: boolean
}

const ImportantBtn: React.FC<IImportantBtnProps> = ({ id, done, important}) => {

  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(isImportant(id))}
      className={ done ? "btn-done": "" || important ? "imp-btn" : "optional-btn"}
    >
      important
    </button>
  );
};

export default ImportantBtn;