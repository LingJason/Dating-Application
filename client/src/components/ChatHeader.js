import { useCookies} from 'react-cookie';

export default function ChatHeader(props) {
  const [ cookies, setCookie, removeCookie ] = useCookies(['user'])

  const logout = () => {
    removeCookie('UserId', cookies.UserId)
    removeCookie('AuthToken', cookies.AuthToken)
    window.location.reload()
  }



  return (
    <div className="chat-header-container">
      <div className="profile">
        <div className="img-container">
          <img src={props.user.url} alt={"photo of " + props.user.first_name}/>
        </div>
        <h3>{props.user.first_name}</h3>
      </div>
      <i className="log-out-icon" onClick={logout}>LogOut</i>
    </div>
  )
};