import React from 'react';
import { useJobContext } from '../context/JobContext';
import { Link } from 'react-router-dom';

const BrowseJobs = () => {
  const { jobs } = useJobContext();

  return (
    <div className="px-4 pb-24 pt-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">My Posted Jobs</h2>
      <ul className="space-y-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li
              key={job.id}
              className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 hover:border-purple-600 transition"
            >
              <Link to={`/job/${job.id}`} className="block">
                <h3 className="text-lg font-semibold text-white">{job.jobTitle}</h3>
                <p className="text-sm text-zinc-400">{job.location}</p>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-zinc-400">No jobs posted yet.</p>
        )}
      </ul>
    </div>
  );
};

export default BrowseJobs;










