const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },

    role: {
      type: String,
      enum: ["jobseeker", "employer"],
      required: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    avatar: { type: String, default: "" },
    resume: { type: String, default: "" },

    // Company details
    companyName: { type: String, default: "" },
    companyDescription: { type: String, default: "" },
    companyLogo: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
