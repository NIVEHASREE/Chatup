import { useState, useRef, useEffect } from "react"
import images from "../assets/images"
const mockConversations = [
  {
    _id: "conv1",
    isgroup: false,
    members: [
      { _id: "currentUserId" }, 
      {
        _id: "u1",
        username: "Alex",
        profilePicture: images.alex,
        isOnline: true
      }
    ],
    lastMessage: {
      text: "Hey 👋",
      senderId: "u1",
      seen: false,
      createdAt: "2026-02-26T10:00:00Z"
    },
    unread: 3
  },
  {
    _id: "conv2",
    isgroup: false,
    members: [
      { _id: "currentUserId" }, 
      {
        _id: "u2",
        username: "Priya",
        profilePicture: images.priya,
        isOnline: false
      }
    ],
    lastMessage: {
      text: "See you tomorrow",
      senderId: "u2",
      seen: true,
      createdAt: "2026-02-26T09:30:00Z"
    },
    unread: 0
  },{
    _id: "conv3",
    isgroup: false,
    members: [
      { _id: "currentUserId" }, 
      {
        _id: "u3",
        username: "John",
        profilePicture: images.john,
        isOnline: false
      }
    ],
    lastMessage: {
      text: "Share me the file",
      senderId: "u3",
      seen: true,
      createdAt: "2026-02-26T09:30:00Z"
    },
    unread: 2
  }
]

const SideBar = ({ selectedUser, setSelectedUser, setConversationId }) => {
  const menuRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <img src={images.icon} className="rounded-full w-10 h-10 p-2"/> Chat
      </h2>
      <div className="relative" ref={menuRef}>
        <img
          src={images.menu}
          alt="menu"
          onClick={() => setShowMenu(prev => !prev)}
          className="w-8 h-8 hover:opacity-80 cursor-pointer"
        />

        {showMenu && (
          <div className="absolute right-0 mt-2 w-32 bg-gray-700 rounded-lg shadow-lg">
            <div
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer rounded-t-lg">
              Edit
            </div>
            <div
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer rounded-b-lg">
              Logout
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        {mockConversations.map(user => 
          {
          const otherUser = user.members.find(m => m._id !== "currentUserId");
          return (
            <div
              key={user._id}
              onClick={() => {
                setSelectedUser(otherUser)
                setConversationId(user._id)
              }}
              className={`flex items-center p-3 rounded-lg cursor-pointer
              ${
                selectedUser?._id === otherUser._id
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
          >
            
            <img src={otherUser.profilePicture} alt="user" className="w-10 h-10 rounded-full mr-3"/>

            <div className="overflow-hidden">
              <p className="font-semibold">{otherUser.username}</p>
              <p className="text-sm opacity-60 truncate w-40">
                {user.lastMessage.text}
              </p>
            </div>

            {user.unread > 0 && (
              <span className="bg-cyan-500 text-xs px-2 py-1 rounded-full">
                {user.unread}
              </span>
            )}
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar
