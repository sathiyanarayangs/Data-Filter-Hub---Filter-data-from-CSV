
Deployed Link: https://sathiyags-datafilterhub.netlify.app/ <br />
Demo Video Link: https://drive.google.com/file/d/1fv8ymjhuLxB_BPxLxc9oqunGmmBqn4LP/view?usp=drive_link

## Framework:

React.js

## Libraries:

react-dropzone: A library for creating drag-and-drop file upload interfaces.

PapaParse (Papa): A JavaScript library for parsing CSV data.

react-csv: A library for generating and handling CSV downloads in React applications.

## Approach:

• CSV Data Upload: Users can upload CSV files to the application.

• Data Storage:

selectedColumnsData: An array that will store data from the selected columns.
csvData: An array that will store the data from the uploaded CSV file.

• File Parsing: When a CSV file is uploaded, it is parsed using the Papa.parse library.

The header option is set to true to treat the first row as headers.
The skipEmptyLines option removes any empty lines.
The parsed data is stored in the csvData state variable.

• Display Filtered Data: The filtered data is displayed in a table.

The table headers are generated based on the selected columns.
Each row in the table corresponds to a record from the filtered data.

• Export as CSV: Users can export the filtered data as a CSV file.

The CSVLink component from 'react-csv' is used to create a download link for the CSV file.
The exported file is named "selected_data.csv" and opens in a new tab when clicked.

## Functionalities:

1) Drop the CSV file
2) Select which columns to import
3) Filter Data
4) Export to CSV- Creating a new sheet from filtered data



