import { motion } from "framer-motion";
import { ArrowRight, Building2, Search, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const isAuthenticated = true;
  const user = { name: "lAXMAN", role: "employer" };

  const data = [
    { icon: Users, label: "Active Users", value: "2.4M+" },
    { icon: Building2, label: "Companies", value: "50K+" },
    { icon: TrendingUp, label: "Jobs Posted", value: "150K+" },
  ];
  return (
    <div className="pt-27 pb-16 min-h-screen bg-white">
      <div className="mx-auto max-w-4xl text-center ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight pt-10"
        >
          Find Your Dream Job or <br />
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Perfect Hire
          </span>
        </motion.h1>

        {/* This is  */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-gray-500 font-medium text-xl leading-relaxed"
        >
          Connect talented professionals with innovative companies. Your next
          career move or perfect candidate is just one click away.
        </motion.p>

        {/* This is for button section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              navigate("/find-jobs");
            }}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Find Jobs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              navigate(
                isAuthenticated && user.role === "employer"
                  ? "/post-job"
                  : "/login"
              );
            }}
            className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Post a Job
          </motion.button>
        </motion.div>

        {/* DATA SECTION */}
        <motion.div 
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8, delay:0.2}}
        className="flex justify-between gap-8 mx-auto max-w-2xl py-12">
          {data.map((item, index) => {
            return (
              <motion.div
               initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className=" w-2xl flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                key={index}
              >
                <div className="w-12 h-12 flex justify-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl items-center text-blue-600 ">
                  <item.icon />
                </div>
                <div className="font-bold mt-1 text-2xl text-gray-600">{item.value}</div>
                <div className="text-sm mt-0.5 text-gray-600 font-medium">{item.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
