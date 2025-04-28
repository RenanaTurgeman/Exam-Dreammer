import React, { useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  const [name, setName] = useState('');
  const [age,setAge] = useState<number|''>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // נוודא שהערך הוא מספר, או מחרוזת ריקה
    setAge(value === '' ? '' : parseInt(value));
  };

  return (
    <div className="App">
      {(name === '' || age === '') && (
      <div className="input data" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          style={{ marginRight: '10px', padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={handleAgeChange}
          style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
      </div>
      )}
      {name && age !== '' && (
        <UserCard name={name} age={Number(age)} />
      )}
    </div>
  );
}

export default App;
