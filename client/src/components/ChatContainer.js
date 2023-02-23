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
        <button className="option">Matches</button>
        <button className="options">Chat</button>
      </div>
      <Matches matches={props.user.matches} setClickedUser={setClickedUser}/>

    </div>
  )
};