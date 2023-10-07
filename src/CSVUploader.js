import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

function CSVUploader({ onFileUpload, onColumnSelect }) {
  const [csvData, setCSVData] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setCSVData(results.data);
        onFileUpload(results.data);
      },
    });
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.csv',
  });

const handleColumnSelect = (columnName) => {
  if (selectedColumns.includes(columnName)) {
    setSelectedColumns(selectedColumns.filter((col) => col !== columnName));
  } else {
    setSelectedColumns([...selectedColumns, columnName]);
  }
  onColumnSelect([...selectedColumns, columnName]); // Pass the updated selected columns
};

  return (
    <div>
      <div
        {...getRootProps()}
        className={`drop-zone ${
          isDragActive ? 'active' : ''
        } rectangular-drop-zone`} // Add a class for styling
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the CSV file here...</p>
        ) : (
          <p>Drag & drop a CSV file here, or click to select one</p>
        )}
      </div>
      {csvData.length > 0 && (
        <div>
          <h2>Select which columns to import</h2>
          <div>
            {Object.keys(csvData[0]).map((column, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={column}
                  onChange={() => handleColumnSelect(column)}
                  checked={selectedColumns.includes(column)}
                />
                {column}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CSVUploader;