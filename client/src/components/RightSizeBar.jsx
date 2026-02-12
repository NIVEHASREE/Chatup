 import React from "react"
const RightSizeBar = ({ selectedUser }) => {
  return (
    <div className="bg-gray-800 text-white p-4 border-l border-gray-700">
      <h2 className="text-lg font-bold mb-4">User Info</h2>

      <p className="font-semibold">{selectedUser.name}</p>
      <p className="text-sm opacity-60">Online</p>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Media</h3>
        <p className="text-sm opacity-50">No media shared</p>
      </div>
    </div>
  )
}

export default RightSizeBar
