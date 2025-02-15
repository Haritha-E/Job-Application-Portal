import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      setError("User already exists. Please login.");
      setSuccess("");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    setSuccess("User registered successfully! You can now login.");
    setError("");

    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      {/* Image Section */}
      <div className="hidden md:block w-1/2">
        <img src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI=" alt="Signup" className="h-screen w-full object-cover rounded-r-lg shadow-lg" />
      </div>

      {/* Signup Form */}
      <div className="w-full md:w-1/2 max-w-md p-8 bg-white rounded-lg shadow-xl text-gray-800">
        <h2 className="text-3xl font-bold text-center text-indigo-600">Create an Account</h2>
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center mt-2">{success}</p>}
        <form className="mt-6" onSubmit={handleSignup}>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg hover:scale-105 transition duration-300 shadow-md font-semibold"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <span
            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
