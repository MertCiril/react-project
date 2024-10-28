import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartVote = () => {
    navigate('/vote');  // Oylama sayfasına yönlendirir
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oylama Sayfasına Hoş Geldiniz</h1>
      <button onClick={handleStartVote} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Oylama Başlat
      </button>
    </div>
  );
}

export default Home;
