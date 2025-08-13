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

const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  password: "",
  role: "",
  avatar: null,
});

const [fromState, setFormState] = useState({
  loading: false,
  errors: {},
  showPassword: false,
  avatarPreview: false,
  success: false,
});




function SignUp() {
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
        <form></form>
      </div>
    </div>
  );
}

export default SignUp;
