import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import ChatContainer from '../components/ChatContainer'
import RightSizeBar from '../components/RightSizeBar'

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <div className="bg-gray-900 w-full h-screen sm:px-[5%] sm:py-[5%]">
      <div
        className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl
        overflow-hidden h-full grid grid-cols-1 relative
        ${
          selectedUser
            ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]'
            : 'md:grid-cols-2'
        }`}
      >
        <SideBar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

        <ChatContainer selectedUser={selectedUser} />

        {selectedUser && (
          <RightSizeBar selectedUser={selectedUser} />
        )}
      </div>
    </div>
  )
}

export default Home
