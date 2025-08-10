import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase } from "lucide-react";

function Header() {
  const isAuthenticated = true;
  const user = { fullName: "Lakxh", role: "employer" };
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to bg-purple-600 text-white items-center flex justify-center rounded-lg h-8 w-8 ">
              <Briefcase className="w-5 h-5 " />
            </div>
            <span className="text-xl font-bold text-gray-900">Job Portal</span>
          </div>

          <div className="space-x-5 text-gray-600 font-medium">
            <button
              onClick={() => {
                navigate("/find-jobs");
              }}
            >
              Find Jobs
            </button>
            <button
              onClick={() => {
                {
                  isAuthenticated && user.role === "employer"
                    ? "/employer-dashboard"
                    : "/login";
                }
              }}
            >
              For Employers
            </button>
          </div>

          {/* fOR lOGIN AND sIGNUP */}
          <div className="space-x-3 font-medium">
            <button>Login</button>
            <button>Signup</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
