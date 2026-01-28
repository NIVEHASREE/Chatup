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
  return (
    <div className="bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <img src={images.icon} className="rounded-full w-10 h-10 p-2"/> Chats</h2>

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
