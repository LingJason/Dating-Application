export default function Home() {

  const authToken = true;

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className="home">
      <h1>Personality Pairs</h1>
      <button className="home-button" onClick={handleClick}>
        {authToken ? "Signout" : "Create Account"}
      </button>
    </div>
  )
};
