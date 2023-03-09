import ChatInput from "./ChatInput";
import Chat from "./Chat";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ChatMessage(props) {
  const [usersMessages, setUsersMessages] = useState(null);
  const [clickedUsersMessages, setClickedUsersMessages] = useState(null);
  const userId = props.user?.user_id;
  const clickedUserId = props.clickedUser?.user_id;

  const getUsersMessages = async () => {
    try {
      const response = await axios.get("http://localhost8000:/messages", {
        params: { userId: userId, correspondingUserId: clickedUserId },
      });
      setUsersMessages(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getClickedUsersMessages = async () => {
    try {
      const response = await axios.get("http://localhost8000:/messages", {
        params: { userId: clickedUserId, correspondingUserId: userId },
      });
      setClickedUsersMessages(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUsersMessages();
    getClickedUsersMessages();
  }, [usersMessages, clickedUsersMessages]);

  const messages = [];

  usersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = user?.first_name;
    formattedMessage["img"] = user?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    message.push(formattedMessage);
  });

  clickedUsersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = clickedUser?.first_name;
    formattedMessage["img"] = clickedUser?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    message.push(formattedMessage);
  });

  const descendingOrderMessages = messages?.sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp)
  );

  return (
    <>
      <Chat descendingOrderMessages={descendingOrderMessages} />
      <ChatInput
        user={user}
        clickedUser={clickedUsers}
        getUsersMessages={getUsersMessages}
        getClickedUsersMessages={getClickedUsersMessages}
      />
    </>
  );
}
