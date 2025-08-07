import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
    const isAuthenticated = true;
    const user = {fullName: "Lakxh", role:"employer"};
    const navigate = useNavigate();

  return (
    <>
      <div>
      hello this is job portal
      </div>
    </>
  )
} 

export default Header
