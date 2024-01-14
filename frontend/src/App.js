import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/customer/all');
        console.log(response.data); // Assuming the response contains JSON data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="App">
      <h1 className='bg-green-400 '>test</h1>
      <button>Get request</button>
    </div>
  );
}

export default App;
