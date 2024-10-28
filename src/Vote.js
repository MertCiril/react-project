import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Vote() {
  const location = useLocation();
  const { title, options } = location.state || {};
  const [votes, setVotes] = useState(options.map(() => 0));

  const handleVote = (index) => {
    setVotes(prevVotes => {
      const newVotes = [...prevVotes];
      newVotes[index] += 1;
      return newVotes;
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{title}</h2>
      <div style={{ marginTop: '20px' }}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleVote(index)}
            style={{
              padding: '10px 20px',
              margin: '10px',
              fontSize: '16px',
              backgroundColor: '#5c3f97',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {option} ({votes[index]} oy)
          </button>
        ))}
      </div>
    </div>
  );
}

export default Vote;
