import { useState } from "react"
import axios from "axios"

export default function ChatInput(props) {
  const [textArea, setTextArea] = useState(null)
  const userId = props.user?.user_id
  const clickUserId = props.clickedUser?.user_id

  const addMessage = async () => {
    const message = {
      timestamp: new Date().toISOString,
      from_userId: userId,
      to_userId: clickUserId,
      message: textArea
    }

    try {
      await axios.post('http://localhost:8000/message', { message })
      props.getUsersMessages()
      props.getClickedUsersMessages()
      setTextArea("")
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className="chat-input-container">
      <textarea value={textArea} onChange ={(event) => setTextArea(event.target.value)}/>
      <button className="secondary-button">Send</button>
    </div>
  )
};