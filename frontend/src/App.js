import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  // get all
  const getAll = async () => {
    console.log('get all');
    try {
      const response = await axios.get('http://localhost:4000/customer/all');
      console.log(response.data);
    } catch (error) {
      alert('Error fetching data:', error);
    }
  };

  // find
  const findCustomer = async () => {
    console.log('find');
  };

  // add
  const addCustomer = async () => {
    console.log('add');
  };

  // update
  const updateCustomer = async () => {
    console.log('update');
  };

  // delete
  const deleteCustomer = async () => {
    console.log('delete');
  };

  return (
    <div className="App">
      <button onClick={getAll} className='custom-button bg-blue-600'>Get all</button>
      <button onClick={findCustomer} className='custom-button bg-gray-600'>Find one</button>
      <button onClick={addCustomer} className='custom-button bg-green-600'>Add</button>
      <button onClick={updateCustomer} className='custom-button bg-orange-600'>Update</button>
      <button onClick={deleteCustomer} className='custom-button bg-red-600'>Delete</button>
    </div>
  );
}

export default App;
