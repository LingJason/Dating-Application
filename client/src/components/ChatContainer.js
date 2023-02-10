import ChatHeader from "./ChatHeader"
import Matches from "./Matches"

export default function ChatContainer(props) {
  return (
    <div className="chat-container">
      <ChatHeader/>
      <div>
        <button className="option">Matches</button>
        <button className="options">Chat</button>
      </div>
      <Matches/>
    </div>
  )
};