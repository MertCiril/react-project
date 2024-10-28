import React, { useState } from 'react';

function Vote() {
  const [votes, setVotes] = useState({ option1: 0, option2: 0, option3: 0 });

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Oylama Yapın</h2>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => handleVote('option1')} style={{ padding: '10px 20px', margin: '10px' }}>
          Seçenek 1 ({votes.option1} oy)
        </button>
        <button onClick={() => handleVote('option2')} style={{ padding: '10px 20px', margin: '10px' }}>
          Seçenek 2 ({votes.option2} oy)
        </button>
        <button onClick={() => handleVote('option3')} style={{ padding: '10px 20px', margin: '10px' }}>
          Seçenek 3 ({votes.option3} oy)
        </button>
      </div>
    </div>
  );
}

export default Vote;
