import React from 'react';

interface JobProps {
  jobTitle: string;
  description: string;
  location: string;
  budget: string;
  contact: string;
}

const JobCard: React.FC<JobProps> = ({ jobTitle, description, location, budget, contact }) => {
  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{jobTitle}</h3>
      <p style={descStyle}>{description}</p>
      <div style={infoRow}>
        <span><strong>📍 {location}</strong></span>
        <span><strong>💰 {budget}</strong></span>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#555' }}>Contact: {contact}</p>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
};

const titleStyle = {
  fontSize: '1.1rem',
  marginBottom: '0.5rem',
};

const descStyle = {
  fontSize: '0.95rem',
  marginBottom: '0.75rem',
};

const infoRow = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.9rem',
  marginBottom: '0.5rem',
};

export default JobCard;
