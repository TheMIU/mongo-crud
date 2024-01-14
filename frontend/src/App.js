import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CustomerTable from './components/CustomerTable';

function App() {
  // load initially
  useEffect(() => {
    getAll();
  }, []);

  const [data, setData] = useState([]);
  const [idInput, setIdInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');

  // get all
  const getAll = async () => {
    console.log('get all');
    try {
      const response = await axios.get('http://localhost:4000/customer/all');
      console.log(response.data);
      if (response.data.length == 0) {
        alert('no data found');
      } else {
        setData(response.data);
      }

    } catch (error) {
      alert('Error ',error.response.data.error);
    }
  };

  // find
  const findCustomer = async () => {
    console.log('find');
    try {
      const response = await axios.get(`http://localhost:4000/customer/find/${idInput}`);
      console.log(response.data);

      if (response.data.length == 0) {
        alert('no data found');
        getAll();
      } else {
        setData(response.data);
      }

    } catch (error) {
      alert('Error ',error.response.data.error);
    }
  };

  // add
  const addCustomer = async () => {
    console.log('add');
    try {
      const newCustomer = {
        id: idInput,
        name: nameInput,
        address: addressInput,
      };
      const response = await axios.post('http://localhost:4000/customer/add', newCustomer);
      console.log(response.data);
      alert('done');
      resetTable();

    } catch (error) {
      console.log(error);
      alert('Error ',error.response.data.error);
    }
  };

  // update
  const updateCustomer = async () => {
    console.log('update');
    try {
      const updatedCustomer = {
        id: idInput,
        name: nameInput,
        address: addressInput,
      };
      const response = await axios.put(`http://localhost:4000/customer/update/${idInput}`, updatedCustomer);
      alert('done', response.data.message);
      resetTable();

    } catch (error) {
      alert('Error ',error.response.data.error);
    }
  };

  // delete
  const deleteCustomer = async () => {
    console.log('delete');
    try {
      const response = await axios.delete(`http://localhost:4000/customer/delete/${idInput}`);
      alert(response.data.message);
      resetTable();

    } catch (error) {
      alert('Error ',error.response.data.error);
    }
  };

  return (
    <div className="App">

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

      <div>
        <button onClick={getAll} className='custom-button bg-blue-600'>Get all</button>
        <button onClick={findCustomer} className='custom-button bg-gray-600'>Find</button>
        <button onClick={addCustomer} className='custom-button bg-green-600'>Add</button>
        <button onClick={updateCustomer} className='custom-button bg-orange-600'>Update</button>
        <button onClick={deleteCustomer} className='custom-button bg-red-600'>Delete</button>
      </div>


      <br />
      <CustomerTable data={data} />
    </div>
  );

  function resetTable() {
    getAll();
    // clear all input fields
    setIdInput('');
    setNameInput('');
    setAddressInput('');
  }
}

export default App;
