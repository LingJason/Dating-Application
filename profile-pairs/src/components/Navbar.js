import Logo from "../images/pngtree-vector-chat-icon-png-image_695370.jpg"

export default function Navbar(props) {

  const handleClick = () => {
    console.log("Clicked Navbar");
    props.setShowModal(true)
  }
  return (
    <nav>
    <div className="logo-container"> {/* <img className="logo" src={Logo}/> */} </div>
    {
    ! props.authToken && <button className="nav-button"
      onClick={handleClick} disabled={props.showModal}>Login</button>
  } </nav>
  )
};
