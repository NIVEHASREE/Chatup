import { useState, useRef, useEffect } from "react"
import images from "../assets/images"
const mockUsers = [
  {
    id: 1,
    name: 'Alex',
    lastMessage: 'Hey 👋',
    unread: 3
  },
  {
    id: 2,
    name: 'Priya',
    lastMessage: 'See you tomorrow',
    unread: 0
  },
  {
    id: 3,
    name: 'John',
    lastMessage: 'Send the file',
    unread: 1
  }
]

const SideBar = ({ selectedUser, setSelectedUser }) => {
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
          className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer"
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
        {mockUsers.map(user => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`flex justify-between items-center p-3 rounded-lg cursor-pointer
              ${
                selectedUser?.id === user.id
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
          >
            <div className="overflow-hidden">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm opacity-60 truncate w-40">
                {user.lastMessage}
              </p>
            </div>

            {user.unread > 0 && (
              <span className="bg-cyan-500 text-xs px-2 py-1 rounded-full">
                {user.unread}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
