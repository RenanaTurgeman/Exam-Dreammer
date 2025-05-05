import React, { useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  const [name, setName] = useState('');
  const [age,setAge] = useState<number|''>('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAge(value === '' ? '' : parseInt(value));
  };

  const handleSubmit = () => {
    if (name !== '' && age !== '') {
      setSubmitted(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="App">
      {!submitted && (
      <div className="input-data">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="number"
          min={0}
          placeholder="Enter your age"
          value={age}
          onChange={handleAgeChange}
        />
        <button onClick={handleSubmit}>send</button>
      </div>
      )}
      {submitted && (
        <UserCard name={name} age={Number(age)} />
      )}
    </div>
  );
}

export default App;
