import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navigation from "./NavBar/Navigation";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import JobSeekerDashboard from "./Pages/JobSeeker/JobSeekerDashboard";
import JobDetails from "./Pages/JobSeeker/JobDetails";
import SavedJobs from "./Pages/JobSeeker/SavedJobs";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import EmployerDashboard from "./Pages/Employer/EmployerDashboard";
import JobPostingForm from "./Pages/Employer/JobPostingForm";
import ManageJobs from "./Pages/Employer/ManageJobs";
import ApplicationViewer from "./Pages/Employer/ApplicationViewer";
import EmployerProfilePage from "./Pages/Employer/EmployerProfilePage";
import NotFound from "./Pages/Auth/NotFound";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/find-jobs" element={<JobSeekerDashboard />} />
        <Route path="/job/:jobId" element={<JobDetails />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/profile" element={<SavedJobs />} />

        {/* Protected Routes */}
        <Route>
          <Route element={<ProtectedRoutes requiredRole="employer" />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/post-job" element={<JobPostingForm />} />
          <Route path="/manageJobs" element={<ManageJobs />} />
          <Route path="/applicants" element={<ApplicationViewer />} />
          <Route path="/companyProfile" element={<EmployerProfilePage />} />

           <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
}

export default App;
