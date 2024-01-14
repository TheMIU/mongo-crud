import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CustomerTable from './components/CustomerTable';

const baseURL = 'http://localhost:4000/customer';

function App() {
  const [data, setData] = useState([]);
  const [idInput, setIdInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');

  // load initially
  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => fetchData('/all');
  const findCustomer = async () => fetchData(`/find/${idInput}`);
  const addCustomer = async () => postData('/add', { id: idInput, name: nameInput, address: addressInput });
  const updateCustomer = async () => putData(`/update/${idInput}`, { id: idInput, name: nameInput, address: addressInput });
  const deleteCustomer = async () => deleteData(`/delete/${idInput}`);

  // get all & find
  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(baseURL + endpoint);
      if (response.data.length === 0) {
        alert('No data found');
      } else {
        setData(response.data);
      }
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  // add
  const postData = async (endpoint, payload) => {
    try {
      const response = await axios.post(baseURL + endpoint, payload);
      console.log(response.data);
      resetTable();
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  // update
  const putData = async (endpoint, payload) => {
    try {
      const response = await axios.put(baseURL + endpoint, payload);
      alert('Done', response.data.message);
      resetTable();
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  // delete
  const deleteData = async (endpoint) => {
    try {
      const response = await axios.delete(baseURL + endpoint);
      alert(response.data.message);
      resetTable();
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  const resetTable = () => {
    getAll();
    setIdInput('');
    setNameInput('');
    setAddressInput('');
  };

  return (
    <div className="App">
      <div className='title'> MongoDB CRUD Operations with React </div>
      <div className='bg-slate-400 flex rounded'>
        <input
          type="number" required placeholder='ID' value={idInput} className='custom-input'
          onChange={(e) => setIdInput(e.target.value)}
        />
        <input
          type="text" placeholder='Name' value={nameInput} className='custom-input'
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input
          type="text" placeholder='Address' value={addressInput} className='custom-input'
          onChange={(e) => setAddressInput(e.target.value)}
        />
      </div>

      <div className='text-center'>
        <button onClick={getAll} className='custom-button bg-blue-600'>Get all</button>
        <button onClick={findCustomer} className='custom-button bg-gray-600'>Find</button>
        <button onClick={addCustomer} className='custom-button bg-green-600'>Add</button>
        <button onClick={updateCustomer} className='custom-button bg-orange-600'>Update</button>
        <button onClick={deleteCustomer} className='custom-button bg-red-600'>Delete</button>
      </div>

      <CustomerTable data={data} />
    </div>
  );
}

export default App;
