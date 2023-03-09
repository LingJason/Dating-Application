import ChatInput from "./ChatInput"
import Chat from "./Chat"
import axios from "axios"

export default function ChatMessage(props) {

  const getUsersMessages = async () => {
    const response = await axios.get('http://localhost8000:/messages', {
      params: {userId: userId, correspondingUserId: clickedUserId}
    })
  }

  return (
    <>
    <Chat/>
    <ChatInput/>
    </>
  )
};