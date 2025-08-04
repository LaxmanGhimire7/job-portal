import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoutes = ({requiredRole}) => {
  return (
    <div>
        {/* will implement later */}
      <Outlet />
    </div>
  )
}

export default ProtectedRoutes
