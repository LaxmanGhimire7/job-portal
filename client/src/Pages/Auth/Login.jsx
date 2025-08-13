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
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [formState, setFormState] = useState({
    loading: false,
    errors: {},
    showPassword: false,
    success: false,
  });

  //validation

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegix.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required.";
    return "";
  };

  //handle input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    //error in form state
    if (formState.errors[name]) {
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" },
      }));
    }
  };

  const validateForm = () => {
    const errors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };

    //Remove empty errors
    Object.keys(errors).forEach((key) => {
      if (!errors[key]) delete errors[key];
    });

    setFormState((prev) => ({
      ...prev,
      errors,
    }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormState((prev) => ({ ...prev, loading: true }));

    try {
      //For Api integration
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        errors: {
          submit:
            error.response?.message?.data || "Login credientials do not match",
        },
      }));
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-50">
      <div className="bg-white max-w-md w-full p-8 rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p>Sign in to your Job Portal account</p>
        </div>

        {/* Form starting */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInput}
                placeholder="Enter Your Email"
                className="border p-2 rounded-2xl w-full border-gray-300 pl-10"
              />
            </div>
            {formState.errors.email && (
              <p className="flex items-center text-red-500 text-sm mt-1 ">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formState.errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type={formState.showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInput}
                placeholder="Enter Your Password"
                className="border border-gray-300 p-2 pl-10 rounded-xl w-full"
              />
              <button
              type="button"
                onClick={() => {
                  setFormState((prev) => ({
                    ...prev,
                    showPassword: !prev.showPassword,
                  }));
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {formState.showPassword ? (
                  <Eye className="h-5 w-5 text-blue-600" />
                ) :
                 (
                 <EyeOff className="h-5 w-5 text-gray-600"/>

                 )}
              </button>
            </div>
            {formState.errors.password && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formState.errors.password}
              </p>
            )}
          </div>

          <button
            
            disabled={formState.loading}
            className="w-full flex justify-center items-center disabled:cursor-not-allowed disabled:opacity-50 mt-5 bg-gradient-to-r from-blue-600 to-purple-700 text-white p-2 rounded-xl font-medium"
          >
            {formState.loading ? (
              <>
                <Loader className="h-4 w-4 ml-2 animate-spin" />
                <p className="ml-2">Signing In.....</p>
              </>
            ) : (
              <span>Sign In</span>
            )}
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
