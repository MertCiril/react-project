import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(['']); // Başlangıçta bir seçenek var
  const navigate = useNavigate();

  // Seçenek ekleme fonksiyonu
  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  // Seçenek kaldırma fonksiyonu
  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  // Seçenek değişim fonksiyonu
  const handleOptionChange = (index, value) => {
    setOptions(prevOptions => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };

  // Oylama başlatma fonksiyonu
  const handleStartVote = () => {
    if (title && options.every(option => option.trim() !== '')) {
      navigate('/vote', { state: { title, options } });
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oylama Başlat</h1>
      <input
        type="text"
        placeholder="Oylama Başlığı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', width: '80%' }}
      />
      <div>
        {options.map((option, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
            <input
              type="text"
              placeholder={`Seçenek ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              style={{ padding: '10px', width: '70%', marginRight: '10px' }}
            />
            <button onClick={() => handleRemoveOption(index)} style={{ padding: '8px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              -
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleAddOption} style={{ padding: '10px 20px', marginTop: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        + Seçenek Ekle
      </button>
      <div>
        <button onClick={handleStartVote} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Oylamayı Başlat
        </button>
      </div>
    </div>
  );
}

export default Home;
