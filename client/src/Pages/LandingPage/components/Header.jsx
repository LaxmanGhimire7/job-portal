import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  const isAuthenticated = true;
  const user = { fullName: "Lakxh", role: "employer" };
  const navigate = useNavigate();

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to bg-purple-600 text-white items-center flex justify-center rounded-lg h-8 w-8 ">
                <Briefcase className="w-5 h-5 " />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Job Portal
              </span>
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
                  navigate(
                    isAuthenticated && user.role === "employer"
                      ? "/employer-dashboard"
                      : "/login"
                  );
                }}
              >
                For Employers
              </button>
            </div>

            {/* fOR lOGIN AND sIGNUP */}
            <div className="space-x-3 font-medium">
              {isAuthenticated ? (
                <div className="flex space-x-5 items-center">
                  <p>Welcome, {user.fullName}</p>

                  <button
                    onClick={() => {
                      user?.role === "employer"
                        ? navigate("/employer-dashboard")
                        : navigate("find-jobs");
                    }}
                    className="bg-gradient-to-r from-blue-600 to bg-purple-700 text-white px-6 py-2 rounded-lg cursor-pointer hover:shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 "
                  >
                    Dashboard
                  </button>
                </div>
              ) : (
                <div className="flex gap-5">
                  <button
                    className="hover:bg-gray-50 text-gray-600 transition-colors hover:text-gray-900 "
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg text-white font-medium w-24 cursor-pointer"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}

export default Header;
