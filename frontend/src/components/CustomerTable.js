// CustomerTable.js
import React from 'react';

const CustomerTable = ({ data }) => {
  return (
    <table className="w-[100%] bg-white border">
      <thead>
        <tr>
          <th className="py-2 px-4 border bg-slate-400 text-white">ID</th>
          <th className="py-2 px-4 border bg-slate-400 text-white">Name</th>
          <th className="py-2 px-4 border bg-slate-400 text-white">Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((customer) => (
          <tr key={customer._id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border">{customer.id}</td>
            <td className="py-2 px-4 border">{customer.name}</td>
            <td className="py-2 px-4 border">{customer.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
