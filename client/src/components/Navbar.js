export default function Navbar(props) {

  const handleClick = () => {
    props.setShowModal(true);
    props.setIsSignedUp(false);
  }
  return (
    <nav>
    <div className="logo-container"> {/* <img className="logo" src={Logo}/> */} </div>
    {
      !props.authToken && <button className="nav-button"
      onClick={handleClick} disabled={props.showModal}>Login</button>
  } </nav>
  )
};
