import { employerFeatures, jobSeekerFeatures } from "../../../utils/data";

function Features() {
  return (
    <div className="bg-white">
      <div className="">
        <h1 className="text-center text-5xl font-bold text-gray-900">
          Everything You Need to{" "}
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Succeed
          </span>
        </h1>

        <p className="text-center mx-auto mt-5 text-xl font-medium text-gray-500 max-w-3xl">
          Whether you're looking for your next opportunity or the perfect
          candidate, we have the tools and features to make it happen.
        </p>
      </div>

      {/* New card from here */}
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mt-16">
        {/* For jobseeker */}
        <div>
          <div className="text-center mb-12">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              For Job Seekers
            </h1>
            <div className=" w-24 mx-auto h-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full" />
          </div>

          <div className="space-y-8">
            {jobSeekerFeatures.map((item, index) => {
              return (
                <div
                  className="group rounded-2xl ml-3 space-x-4 p-7 flex items-start gap-5 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                  key={index}
                >
                  <div className="bg-blue-100 flex p-3 group-hover:bg-blue-200 transition-colors rounded-xl">
                    <item.icon className="text-blue-600 " />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 font-medium text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* For Recruiter */}
        <div>
          <div className="text-center mb-12">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              For Employer
            </h1>
            <div className="w-24 mx-auto h-1 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full " />
          </div>

          <div className="space-y-8 ">
            {employerFeatures.map((item, index) => {
              return (
                <div className="group rounded-2xl w-2xl ml-4 mt- space-x-4 p-7 flex items-start gap-5 hover:bg-purple-50 transition-all duration-300 cursor-pointer "
                key={index}>
                  <div className="bg-purple-100 p-3 flex group-hover:bg-purple-200 rounded-xl">
                    <item.icon className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">{item.title}</h3>
                    <p className="mt-2 font-medium text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
