interface IEditBtnProps {
  done: boolean,
  id: string,
  text: string,
  setEditing: React.Dispatch<React.SetStateAction<boolean>>,
  setTodo: React.Dispatch<React.SetStateAction<{
    text: string;
    id: string
  }>>,
  todo: {}
};

const EditBtn: React.FC<IEditBtnProps> = ({ done, id, text, setEditing, setTodo, todo }) => {

  const onEditToggle = (id: string, text: string): void => {
    setEditing(true);
    setTodo({...todo, id, text});
  };

  return (
    <button
      type="button"
      className={done ? "btn-done" : "optional-btn"}
      onClick={() => onEditToggle(id, text)}
    >
      edit
    </button>
  );
};

export default EditBtn;