// Greeting.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGreeting, selectGreeting } from '../slices/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/random_greeting')
      .then(response => response.json())
      .then(data => dispatch(setGreeting(data.greeting)))
      .catch(error => console.error('Error:', error));
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
