import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPlusCircle, FaFileAlt, FaUser, FaStore } from 'react-icons/fa';
import { IconType } from 'react-icons';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: {
    path: string;
    label: string;
    icon: IconType;
  }[] = [
    { path: '/', label: 'Post job', icon: FaPlusCircle },
    { path: '/browse', label: 'My jobs', icon: FaFileAlt },
    { path: '/market', label: 'Market', icon: FaStore },
    { path: '/profile', label: 'Profile', icon: FaUser }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#fff',
        borderTop: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 0',
        zIndex: 1000
      }}
    >
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px',
            color: location.pathname === item.path ? '#6b21a8' : '#333',
            fontWeight: location.pathname === item.path ? 'bold' : 'normal',
            cursor: 'pointer'
          }}
        >
          {React.createElement(item.icon as React.ComponentType<{ size?: number }>, { size: 20 })}
          <span style={{ marginTop: '4px' }}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;





