import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-50">
      <div className="bg-white max-w-md w-full p-8 rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p>Sign in to your Job Portal account</p>
        </div>

        {/* Form starting */}
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="border p-2 rounded-2xl w-full border-gray-300 pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Enter Your Password"
                className="border border-gray-300 p-2 pl-10 rounded-xl w-full"
              />
            </div>
          </div>

          <button className="w-full mt-5 bg-gradient-to-r from-blue-600 to-purple-700 text-white p-2 rounded-xl font-medium">
            Sign In
          </button>

          <div className="text-center">
            <p className="font-medium text-gray-900">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="text-blue-700">Register Now</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
