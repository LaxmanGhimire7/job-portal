import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Briefcase } from "lucide-react";

function Header() {
    const isAuthenticated = true;
    const user = {fullName: "Lakxh", role:"employer"};
    const navigate = useNavigate();

  return (
    <>
    <div>
      <div>
        <Briefcase className="w-5 h-5 " />  
      </div>
    </div>
    </>
  )
} 

export default Header;
