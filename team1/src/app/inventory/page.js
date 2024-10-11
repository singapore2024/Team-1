'use client'; // This is a client-side component

import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // Import AG Grid React component
import Image from 'next/image'; // Import Next.js Image component
import 'ag-grid-community/styles/ag-grid.css'; // Import AG Grid core CSS
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Import AG Grid Alpine theme
import '../globals.css'; // Import global styles including your color palette

const Inventorypage = () => {
  // Define the data for the grid (15 dummy rows)
  const [rowData, setRowData] = useState([
    { ingredientId: "001", name: "Flour", unitPrice: 2.5, currentQuantity: 100, reservedQuantity: 50 },
    { ingredientId: "002", name: "Sugar", unitPrice: 1.5, currentQuantity: 200, reservedQuantity: 60 },
    { ingredientId: "003", name: "Salt", unitPrice: 0.8, currentQuantity: 300, reservedQuantity: 150 },
    { ingredientId: "004", name: "Butter", unitPrice: 3.2, currentQuantity: 75, reservedQuantity: 20 },
    { ingredientId: "005", name: "Milk", unitPrice: 1.0, currentQuantity: 50, reservedQuantity: 30 },
    { ingredientId: "006", name: "Eggs", unitPrice: 0.5, currentQuantity: 30, reservedQuantity: 15 },
    { ingredientId: "007", name: "Yeast", unitPrice: 1.2, currentQuantity: 40, reservedQuantity: 10 },
    { ingredientId: "008", name: "Baking Powder", unitPrice: 0.9, currentQuantity: 90, reservedQuantity: 45 },
    { ingredientId: "009", name: "Cocoa Powder", unitPrice: 4.5, currentQuantity: 25, reservedQuantity: 10 },
    { ingredientId: "010", name: "Vanilla Extract", unitPrice: 6.0, currentQuantity: 10, reservedQuantity: 5 },
    { ingredientId: "011", name: "Corn Starch", unitPrice: 2.2, currentQuantity: 110, reservedQuantity: 70 },
    { ingredientId: "012", name: "Olive Oil", unitPrice: 5.5, currentQuantity: 80, reservedQuantity: 30 },
    { ingredientId: "013", name: "Vinegar", unitPrice: 1.8, currentQuantity: 60, reservedQuantity: 20 },
    { ingredientId: "014", name: "Baking Soda", unitPrice: 0.7, currentQuantity: 150, reservedQuantity: 50 },
    { ingredientId: "015", name: "Brown Sugar", unitPrice: 1.7, currentQuantity: 180, reservedQuantity: 75 },
  ]);

  // Define the columns for the grid
  const [columnDefs] = useState([
    { headerName: "Ingredient ID", field: "ingredientId", editable: false }, // Ingredient ID is not editable
    { headerName: "Name", field: "name", editable: true }, // Name is editable
    { headerName: "Unit Price", field: "unitPrice", editable: true, cellEditor: 'agNumberCellEditor' }, // Unit price is editable, numeric input
    { headerName: "Current Quantity", field: "currentQuantity", editable: true, cellEditor: 'agNumberCellEditor' }, // Editable and numeric
    { headerName: "Reserved Quantity", field: "reservedQuantity", editable: true, cellEditor: 'agNumberCellEditor' }, // Editable and numeric
    { headerName: "Quantity to Buy", field: "quantityToBuy", editable: false, valueGetter: params => params.data.currentQuantity - params.data.reservedQuantity }, // Calculated in frontend, not editable
  ]);

  // Handle cell value changes (for Current Quantity and Reserved Quantity)
  const onCellValueChanged = (params) => {
    if (params.colDef.field === 'currentQuantity' || params.colDef.field === 'reservedQuantity') {
      // Update 'quantityToBuy' when either 'currentQuantity' or 'reservedQuantity' changes
      const updatedData = rowData.map(row => {
        if (row.ingredientId === params.data.ingredientId) {
          return {
            ...row,
            [params.colDef.field]: params.newValue,
            quantityToBuy: row.currentQuantity - row.reservedQuantity // Recalculate quantity to buy
          };
        }
        return row;
      });
      setRowData(updatedData); // Update the rowData state with the recalculated values
    }
  };

  return (
    <div>
      {/* Logo and Heading */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px'  }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '24px', marginLeft: '10px' }}>Inventory Page</h1>
        <Image
          src="/images/inventory.png" // Path to the image
          alt="Logo"
          width={40} // Adjust width as needed
          height={40} // Adjust height as needed
        />
      </div>
      {/* AG Grid container */}
      <div className="ag-theme-alpine custom-grid" style={{ height: '100vh', width: '100vw' }}>
        <AgGridReact
          rowData={rowData} // Row data for the grid
          columnDefs={columnDefs} // Column definitions for the grid
          defaultColDef={{ sortable: true, filter: true }} // Enable sorting and filtering
          onCellValueChanged={onCellValueChanged} // Handle cell changes
        />
      </div>
    </div>
  );
};

export default Inventorypage;
