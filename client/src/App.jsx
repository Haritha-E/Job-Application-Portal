import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostVacancy from "./pages/PostVacancy";
import ExploreJobs from "./pages/ExploreJobs"; 

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/post-vacancies" element={<PostVacancy />} />
          <Route path="/jobs" element={<ExploreJobs />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;