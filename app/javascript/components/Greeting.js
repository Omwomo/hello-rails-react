// Greeting.js
import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/random_greeting');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setGreeting(data.greeting);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
