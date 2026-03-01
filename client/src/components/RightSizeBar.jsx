 import React, { use } from "react"
import images from "../assets/images"

const RightSizeBar = ({ selectedUser }) => {
  return (
    <div className="bg-gray-800 text-white p-4 border-l border-gray-700">

      <h2 className="text-lg font-bold mb-4">User Info</h2>
      <div className="flex flex-col items-center space-y-2">
        <img src={selectedUser.profilePicture} className="w-16 h-16 rounded-full mb-2"/>
        <p className="font-semibold">{selectedUser.username}</p>
        <p className={selectedUser.isOnline ? "text-sm text-green-400" : "text-sm text-red-400"}>{selectedUser.isOnline ? "Online" : "Offline"}</p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Media</h3>
        <p className="text-sm opacity-50">No media shared</p>
      </div>
    </div>
  )
}

export default RightSizeBar
