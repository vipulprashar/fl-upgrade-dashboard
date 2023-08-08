import React, { useState, useEffect } from 'react';
import { fetchSiteMasterData } from '../Supabase/api/ReadSitesApi';
//import { Box, InputAdornment, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
//import SearchIcon from '@mui/icons-material/Search';

const MainDashboard = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [hover, setHover] = useState(false);
  //const [searchInput, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const responseData = await fetchSiteMasterData();
    if (responseData && responseData.length > 0) {
      setData(responseData);
      setColumns(Object.keys(responseData[0]));
    } else {
      console.error('Error fetching data:', responseData);
    }
  }

  /*const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };*/


 /* const filteredData = data.filter((item) => {
    return columns.some((column) =>
      item[column] &&
      item[column].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
*/

const handleSearchSubmit = (event) => {
  event.preventDefault();
  if (searchTerm) {
    setFilteredData(
      data.filter((item) =>
        columns.some((column) =>
          item[column] &&
          item[column].toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  } else {
    setFilteredData(data);
  }
};
  return (
    <div className="page-container bg-white">
      <div className="content-container">   
      <form onSubmit={handleSearchSubmit} className="search-form relative w-full max-w-6xl">
          <input
            name="search"
            type="text"
            /*className="bg-gray-200 w-full p-4 pt-10 pb-3 pl-8 rounded-full placeholder-gray-600 shadow-xl focus:bg-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            */
            className="bg-gray-200 w-full p-4 pt-8 pb-3 pl-16 rounded-full placeholder-gray-600 shadow-xl focus:bg-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:outline-none text-left text-3xl"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <svg
              className="h-10 w-10 text-indigo-500"
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
          <button
            className="custom-search-button absolute inline-flex items-center h-12 px-4 py-2 text-sm text-white transition duration-150 duration-300 ease-in-out rounded-full outline-none right-3 top-1/2 transform -translate-y-1/2 sm:px-6 sm:text-base sm:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            style={{
              backgroundColor: hover ? 'rgba(79, 70, 229)' : 'rgba(99, 102, 241)',
            }}
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex mt-20">
        {/*<Sidebar/>*/}
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
export default MainDashboard;