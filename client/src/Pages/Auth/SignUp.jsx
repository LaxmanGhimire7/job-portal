import {
  User,
  Mail,
  Lock,
  Upload,
  Eye,
  EyeOff,
  UserCheck,
  Building2,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
// import { motion } from "lucide-react";
import { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    avatar: null,
  });

  const [formState, setFormState] = useState({
    loading: false,
    errors: {},
    showPassword: false,
    avatarPreview: false,
    success: false,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (formState.errors[name]) {
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev, [name]: "" },
      }));
    }
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, role }));
    if (formState.errors.role) {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [role]: "",
        },
      }));
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // const error = validateAvatar(file);
      // if (error) {
      //   setFormState((prev) => ({
      //     ...prev,
      //     errors: { ...prev.errors, avatar: error },
      //   }));
      //   return;
      // }

      setFormData((prev) => ({ ...prev, avatar: file }));

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormState((prev) => ({
          ...prev,
          avatarPreview: e.target.result,
          errors: { ...prev.errors, avatar: "" },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-md p-8 rounded-xl shadow-xl">
        <div className="text-center">
          <h3 className="font-bold text-xl">Create Your Account</h3>
          <p className="text-sm text-gray-600 font-medium mt-2">
            Join thousands of professionals finding their dream jobs
          </p>
        </div>

        {/* This is for from */}
        <form className="space-y-5">
          <div>
            <label>Full Name</label>
            <div>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="border w-full py-2 px-4 rounded-xl"
              />
            </div>
          </div>

          <div>
            <label>Email Address</label>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="border w-full py-2 px-4 rounded-xl"
              />
            </div>
          </div>

          <div>
            <label>Password</label>
            <div className="relative">
              <Lock className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
              <input
                type={formState.showPassword ? "text" : "password"}
                name="email"
                placeholder="Enter Your Password"
                className="border w-full py-2 pl-10 px-4 rounded-xl"
              />
              <button type="button" onClick={()=>{
                setFormState((prev)=>({
                  ...prev,
                  showPassword: !prev.showPassword
                }))
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 ">
                {formState.showPassword ? 
                (<Eye className="text-blue-600 w-5 h-5"/>)
                :
                (<EyeOff className="w-5 h-5" />

                )}

              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-600 font-medium">
              Profile Picture (Optional)
            </label>
            <div>
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full">
                  {formState.avatarPreview ? (
                    <img
                      src={formState.avatarPreview}
                      alt="Avatar Preview"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="file"
                    name="file"
                    id="avatar"
                    accept=".jpg,.jpeg,.png"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                  <label
                    htmlFor="avatar"
                    className="border cursor-pointer hover:bg-gray-100 transition-color px-4 py-2 flex text-center items-center gap-2 w-full rounded-xl border-gray-300 bg-gray-50 "
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Photo</span>
                  </label>
                  <p className="text-xs text-gray-600 font-medium mt-1">
                    JPG, PNG up to 5MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div>
            <label>
              I am a <span className="text-red-600">*</span>
            </label>
            <div>input</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
