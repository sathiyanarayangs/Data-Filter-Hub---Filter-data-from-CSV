import React, { useState } from 'react';
import './App.css';
import CSVUploader from './CSVUploader';
import { CSVLink } from 'react-csv'; // Import CSVLink from react-csv

function App() {
  const [selectedColumnsData, setSelectedColumnsData] = useState([]);
  const [csvData, setCSVData] = useState([]);

  const handleFileUpload = (data) => {
    setCSVData(data);
  };

  const handleColumnSelect = (selectedColumnNames) => {
    const columnData = csvData.map((row) => {
      const rowData = {};
      selectedColumnNames.forEach((columnName) => {
        rowData[columnName] = row[columnName];
      });
      return rowData;
    });
    setSelectedColumnsData(columnData);
  };

  return (
    <div className="App">
      <h1>CSV Importer</h1>
      <CSVUploader onFileUpload={handleFileUpload} onColumnSelect={handleColumnSelect} />
      {selectedColumnsData.length > 0 && (
        <div>
          <h2>Filtered Data</h2>
          <table>
            <thead>
              <tr>
                {Object.keys(selectedColumnsData[0]).map((columnName) => (
                  <th key={columnName}>{columnName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {selectedColumnsData.map((rowData, index) => (
                <tr key={index}>
                  {Object.values(rowData).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <CSVLink
            data={selectedColumnsData}
            filename="selected_data.csv"
            className="btn btn-primary export-button"
            target="_blank"
          >
            Export as CSV
          </CSVLink>
        </div>
      )}
      <div className="footer">Developed by Sathya GS</div>
    </div>
  );
}

export default App;
