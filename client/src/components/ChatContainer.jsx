import React, { useState } from 'react'
import images from "../assets/images"
const mockConversations = [
  {
    conversationId: "conv1",
    _id: "m1",
    text: "Hey 👋",
    senderId: "u1",
    seen: false,
    createdAt: "2026-02-26T10:00:00Z"
  },
  {
    _id: "m2",
    conversationId: "conv1",
    text: "Hello there",
    senderId: "currentUserId",
    seen: false,
    createdAt: "2026-02-26T10:00:00Z"
  },
  {
    _id: "m3",
    conversationId: "conv1",
    text: "How are you?",
    senderId: "u1",
    seen: false,
    createdAt: "2026-02-26T10:00:00Z"
  },
  {
    _id: "m4",
    conversationId: "conv1",
    text: "See you tomorrow",
    senderId: "u2",
    seen: true,
    createdAt: "2026-02-26T09:30:00Z"
  },
  {
    _id: "m5",
    conversationId: "conv1",
    text: "ok bye",
    senderId: "currentUserId",
    seen: true,
    createdAt: "2026-02-26T09:30:00Z"
  },
]
const ChatContainer = ({ selectedUser, conversationId }) => {
  const [messages, setMessages] = useState(mockConversations);
  const [currMessage,setCurrMessage]=useState("");
  const sendMessage= (message)=>{
    if(message.trim()===""){
      return;
    }
    const newMessage = {
      _id: Date.now().toString(),
      conversationId: conversationId,
      text: message,
      senderId: "currentUserId",
      seen: false,
      createdAt: new Date().toISOString()
    }
    messages.push(newMessage);
    setCurrMessage("");
  }
  if (!selectedUser) {
    return (
      <div className="flex items-center justify-center text-white opacity-50">
        Select a chat to start messaging
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full text-white">
      <div className="p-4 border-b border-gray-700 font-bold">
        {selectedUser.username}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(msg=>{
          return(
              <div key={msg._id} className={`flex ${msg.senderId === "currentUserId" ? "justify-end" : "justify-start"}`}>
                <p className="bg-gray-700 max-w-xs p-2 rounded-lg text-white">{msg.text}</p>
              </div>
          )
        })}
      </div>

      <div className="flex justify-center p-4 border-t border-gray-700">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-3 rounded-xl bg-gray-800 outline-none"
          onChange={(e)=>setCurrMessage(e.target.value)}
          value={currMessage}
        />
        <img src={images.send} 
          className="w-10 h-10 cursor-pointer"
          onClick={()=>{
            sendMessage(currMessage);
          }}
        />
      </div>
    </div>
  )
}

export default ChatContainer
