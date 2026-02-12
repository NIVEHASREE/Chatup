import React from 'react'

const ChatContainer = ({ selectedUser }) => {
  if (!selectedUser) {
    return (
      <div className="flex items-center justify-center text-white opacity-50">
        Select a chat to start messaging
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full text-white">
      <div className="p-4 border-b border-gray-700 font-semibold">
        {selectedUser.name}
      </div>

      <div className="flex-1 flex items-center justify-center opacity-50">
        Messages will appear here
      </div>

      <div className="p-4 border-t border-gray-700">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-3 rounded-xl bg-gray-800 outline-none"
        />
      </div>

    </div>
  )
}

export default ChatContainer
