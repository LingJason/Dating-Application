export default function ChatHeader(props) {
  return (
    <div className="chat-header-container">
      <div className="profile">
        <div className="img-container">
          <img src={props.user.url} alt={"photo of " + props.user.first_name}/>
        </div>
        <h3>{props.user.first_name}</h3>
      </div>
      <i className="log-out-icon">LogOut</i>
    </div>
  )
};