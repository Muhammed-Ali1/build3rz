import React, { useState } from 'react';
import { useJobContext } from '../context/JobContext';
import { useNavigate } from 'react-router-dom';

function PostJob() {
  const { addJob } = useJobContext();
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const job = {
      jobTitle,
      description,
      location,
      budget,
      contact
    };

    addJob(job);
    alert('Job posted!');

    // Clear form
    setJobTitle('');
    setDescription('');
    setLocation('');
    setBudget('');
    setContact('');

    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8 text-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Post a Job</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-zinc-900 border border-zinc-700 p-6 rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
          className="input-style"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="input-style"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="input-style"
        />
        <input
          type="text"
          placeholder="Budget (optional)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="input-style"
        />
        <input
          type="text"
          placeholder="Contact Info"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          className="input-style"
        />
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md font-semibold transition"
        >
          Submit Job
        </button>
      </form>
    </div>
  );
}

export default PostJob;









