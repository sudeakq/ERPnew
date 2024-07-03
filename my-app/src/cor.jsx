import React, { useEffect } from 'react';
import axios from 'axios';

const TestCors = () => {
  useEffect(() => {
    const testCors = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/test-cors');
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    testCors();
  }, []);

  return (
    <div>
      <h1>Testing CORS</h1>
    </div>
  );
};

export default TestCors;
