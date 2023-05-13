interface ICanselBtnProps {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
};

const CanselBtn: React.FC<ICanselBtnProps> = ({ setEditing, isEditing }) => {

  const canselEdit = (): void => {
    setEditing(!isEditing);
  };

  return (
    <button
      type="button"
      className="editing-btn addTask-btn"
      onClick={canselEdit}
      id="cbtn"
      title="CanselBtn"
    >
      cansel
    </button>
  );
};

export default CanselBtn;