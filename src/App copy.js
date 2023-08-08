import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartBar, faCog, faTable } from "@fortawesome/free-solid-svg-icons";
import { supabase } from './Supabase/supabaseClient';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <a href="#" className="sidebar-link">
          <FontAwesomeIcon icon={faHome} className="icon" />
          Dashboard
        </a>
        <a href="#" className="sidebar-link">
          <FontAwesomeIcon icon={faChartBar} className="icon" />
          Analytics
        </a>
        <a href="#" className="sidebar-link">
          <FontAwesomeIcon icon={faTable} className="icon" />
          Data
        </a>
        <a href="#" className="sidebar-link">
          <FontAwesomeIcon icon={faCog} className="icon" />
          Settings
        </a>
      </nav>
    </div>
  );
}

function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data: result, error } = await supabase
      .from('site_master')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setData(result);
      if (result.length > 0) {
        setColumns(Object.keys(result[0]));
      }
    }
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredData = data.filter((item) => {
    return columns.some((column) =>
      item[column] &&
      item[column].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
  return (
    <div className="page-container bg-white">
                <div className="content-container">   
            <div className="search-container relative w-full max-w-md">
              <input
                type="text"
                className="bg-gray-200 w-full p-2 pl-8 rounded placeholder-gray-600 shadown-bottom focus:bg-white focus:border-purple-300 focus:ring focus:ring-purple-200 focus:outline-none"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-purple-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 11-1.414 1.414l-4.816-4.817A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
      <div className="flex mt-20">
        <Sidebar/>
        <div className="App w-full">
          <div className="header-container bg-white py-4 ml-6 shadow-md">
            <h1 className="text-xl font-bold mb-4 ml-6">Site Dashboard</h1>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <table className="border-collapse border border-gray-300 w-full rounded">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} className="border border-gray-300 p-2 px-6 py-3 bg-gray-50 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item, index) => (
                <tr key={index}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-2 px-6 py-4 whitespace-nowrap text-sm text-black-500">
                      {item[column]}
                    </td>
                    ))}
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );  
}
export default App;
