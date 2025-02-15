import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gradient-to-b from-purple-600 to-indigo-700 text-white p-6 fixed h-full">
        <h1 className="text-2xl font-extrabold mb-6">JobSphere</h1>
        <nav className="space-y-4">
          <Link to="/jobs" className="block py-2 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-700">Jobs</Link>
          <Link to="/applications" className="block py-2 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-700">Applications</Link>
          <Link to="/post-vacancies" className="block py-2 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-700">Post Jobs</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="w-full py-2 px-4 rounded-lg bg-red-500 hover:bg-red-700">Logout</button>
          ) : (
            <>
              <Link to="/login" className="block py-2 px-4 rounded-lg bg-green-500 hover:bg-green-700">Login</Link>
              <Link to="/signup" className="block py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700">Sign Up</Link>
            </>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-grow p-12 bg-gray-100">
        <section className="text-center py-12">
          <h2 className="text-5xl font-bold text-indigo-800">Find Your Dream Job</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-gray-700">
            Explore job opportunities, submit applications, and manage your career effortlessly.
          </p>
          <Link to="/jobs" className="mt-6 inline-block bg-indigo-500 text-white py-3 px-10 rounded-full hover:bg-indigo-700 hover:scale-110 transition duration-300 shadow-md">
            Explore Jobs
          </Link>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold">🔍 Browse Jobs</h3>
            <p className="mt-3 text-gray-700">Search for jobs that match your skills.</p>
            <Link to="/jobs" className="block mt-4 text-indigo-500 hover:underline">Explore</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold">📄 Manage Applications</h3>
            <p className="mt-3 text-gray-700">Track your job applications.</p>
            <Link to="/applications" className="block mt-4 text-indigo-500 hover:underline">Manage</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold">📢 Post Vacancies</h3>
            <p className="mt-3 text-gray-700">Recruiters can post job openings.</p>
            <Link to="/post-vacancies" className="block mt-4 text-indigo-500 hover:underline">Post</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
