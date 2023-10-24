import React, { useState, useEffect } from 'react';
import { fetchTableData, saveDataToServer } from '../API/API';
import { styled } from 'styled-components';

export const TablePage = () => {
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState([]);

  useEffect(() => {
    fetchTableData()
      .then(data => {
        setData(data.results);
        console.log(data)
      })
      .catch(error => console.error('Error fetching table data:', error));
  }, []);

  const handleEdit = (index, column, value) => {
    const newEditedData = editedData.length > 0 ? [...editedData] : [...data];
    newEditedData[index] = { ...newEditedData[index], [column]: value };
    setEditedData(newEditedData);
  };

  const handleSave = () => {
    saveDataToServer(editedData) 
      .then(response => {
        if (response.ok) {
          alert('Data is successfully saved');
        } else {
          alert('Error saving data to server! Please try again');
        }
      })
      .catch(error => {
        alert(`Error: ${error.message}`);
      });
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Table Page</h2>
      <table style={{ width: '100vw', margin: '0px 0px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthday date</th>
            <th>Phone number</th>
            <th>E-mail</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {(editedData.length > 0 ? editedData : data).map((item, index) => (
          <tr key={item.id}>
            <td>
              <Input
                type="text"
                value={item.name}
                onChange={(e) => handleEdit(index, 'name', e.target.value)}
                style={{ width: '' }}
              />
            </td>
            <td>
              <Input
                type="text"
                value={item.birthday_date}
                onChange={(e) => handleEdit(index, 'birthday_date', e.target.value)}
                style={{ width: '200px' }}
              />
            </td>
            <td>
              <Input
                type="text"
                value={item.phone_number}
                onChange={(e) => handleEdit(index, 'phone_number', e.target.value)}
                style={{ width: '200px' }}
              />
            </td>
            <td>
              <Input
                type="text"
                value={item.email}
                onChange={(e) => handleEdit(index, 'email', e.target.value)}
              />
            </td>
            <td>
              <Input
                type="text"
                value={item.address}
                onChange={(e) => handleEdit(index, 'address', e.target.value)}
              />
            </td>
          </tr>
          ))}
        </tbody>
        <button onClick={handleSave}>Save</button>
      </table>
    </div>
  );
};

const Input = styled.input`
  width: 300px;
  padding: 5px;
  margin: 5px 0px;
  border: 1px;
  box-shadow: 0px 2px 5px #c8c8c8 ;
`