import ChatInput from "./ChatInput"
import Chat from "./Chat"
import axios from "axios"
import { useEffect, useState } from "react"

export default function ChatMessage(props) {
  const [userMessages, setUsersMessages] = useState(null)
  const userId = props.user?.user_id
  const clickedUserId = props.clickedUser?.user_id


  const getUsersMessages = async () => {
    try {
      const response = await axios.get('http://localhost8000:/messages', {
      params: {userId: userId, correspondingUserId: clickedUserId}
    })
    setUsersMessages(response.data)
    }catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getUsersMessages()
  }, [userMessages])

  return (
    <>
    <Chat/>
    <ChatInput/>
    </>
  )
};