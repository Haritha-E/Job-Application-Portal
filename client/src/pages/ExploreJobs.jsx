import  { useState, useEffect } from "react";

function ExploreJobs() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setJobs([
      { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York, USA", type: "Full-time" },
      { id: 2, title: "Data Scientist", company: "AI Innovations", location: "Bangalore, India", type: "Part-time" },
      { id: 3, title: "Web Developer", company: "Creative Solutions", location: "Remote", type: "Contract" },
      { id: 4, title: "Backend Developer", company: "Cloud Tech", location: "Mumbai, India", type: "Full-time" },
      { id: 5, title: "Frontend Developer", company: "Cloud Vision", location: "Chennai, India", type: "Full-time" },

    ]);
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-indigo-700">Explore Job Openings</h2>
        <p className="text-gray-600 text-center mt-2">Find the perfect job for you.</p>

        {/* Search Input */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search by title, company, or location..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Job Listings */}
        <div className="mt-6 space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="p-4 bg-gray-50 border rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-gray-700">{job.company} - {job.location}</p>
                <span className="text-sm bg-blue-200 px-2 py-1 rounded">{job.type}</span>
                <button className="block mt-3 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExploreJobs;
