import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { jobs } = useJobContext();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return <p className="p-4 text-center text-zinc-400">Job not found.</p>;
  }

  return (
    <div className="px-4 pb-24 pt-6 max-w-2xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="text-purple-500 hover:underline mb-4"
      >
        ← Back
      </button>
      <div className="bg-zinc-800 p-6 rounded-lg shadow border border-zinc-700">
        <h2 className="text-2xl font-bold mb-4 text-white">{job.jobTitle}</h2>
        <p className="mb-2 text-zinc-300">
          <span className="font-semibold text-white">📍Location:</span> {job.location}
        </p>
        <p className="mb-2 text-zinc-300">
          <span className="font-semibold text-white">Description:</span> {job.description}
        </p>
        {job.budget && (
          <p className="mb-2 text-zinc-300">
            <span className="font-semibold text-white">💰Budget:</span> {job.budget}
          </p>
        )}
        <p className="text-zinc-300">
          <span className="font-semibold text-white">📞Contact:</span> {job.contact}
        </p>
      </div>
    </div>
  );
};

export default JobDetail;




