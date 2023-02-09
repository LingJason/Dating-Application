import { useState } from "react"

export default function ChatInput(props) {
  const [textArea, setTextArea] = useState(null)
  return (
    <div className="chat-input-container">
      <textarea value={textArea} onChange ={(event) => setTextArea(event.target.value)}/>
      <button className="secondary-button">Send</button>
    </div>
  )
};