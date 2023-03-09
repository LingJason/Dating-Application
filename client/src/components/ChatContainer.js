import ChatHeader from "./ChatHeader"
import Matches from "./Matches"
import ChatMessage from "./ChatMessage"
import { useState } from "react"

export default function ChatContainer(props) {
  const [clickedUser, setClickedUser] = useState(null)
  return (
    <div className="chat-container">
      <ChatHeader user ={props.user}/>
      <div>
        <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
        <button className="options" disabled={!clickedUser}>Chat</button>
      </div>
      
      {!clickedUser && <Matches matches={props.user.matches} setClickedUser={setClickedUser}/>}


      {clickedUser && <ChatMessage user={props.user} clickedUser={clickedUser}/>}

    </div>
  )
};