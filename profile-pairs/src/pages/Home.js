import Navbar from "../components/Navbar";

export default function Home() {

  const authToken = true;

  const handleClick = () => {
    console.log('clicked');
  }

  return (
  <>
  <div className="overlay">
  <Navbar authToken={authToken} />
    <div className="home">
      <h1>Personality Pairs</h1>
      <button className="primary-button"
        onClick={handleClick}> {
        authToken ? "Signout" : "Create Account"
      } </button>
    </div>
    </div>
  </>)
};
