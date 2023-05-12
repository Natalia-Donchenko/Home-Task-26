
interface ICanselBtnProps {
  setEditing: any,
  isEditing: any
}

const CanselBtn: React.FC<ICanselBtnProps> = ({ setEditing, isEditing }) => {

  const canselEdit = () => {
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