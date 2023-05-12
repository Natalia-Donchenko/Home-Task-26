interface IEditBtnProps {
  done: boolean,
  id: string,
  text: string,
  setEditing: React.Dispatch<React.SetStateAction<boolean>>,
  setState: any,
  state: any
}

const EditBtn: React.FC<IEditBtnProps> = ({ done, id, text, setEditing, setState, state }) => {

  
  const onEditToggle = (id: string, text: string) => {

    setEditing(true);
    setState({...state, id, text});
  };

  return (
    <button
      type="button"
      className={done ? "btn-done" : "optional-btn"}
      onClick={() =>onEditToggle(id, text)}
    >
      edit
    </button>
  )
};

export default EditBtn;