export default function AuthModal(props) {

  const handleClick = () => {
    props.setShowModal(false);
  }
  
  return (
    <div className="auth-modal">
      <div onClick={handleClick}>quit</div>
    </div>
  )
};