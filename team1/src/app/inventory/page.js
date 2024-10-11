'use client'; // This is a client-side component

import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // Import AG Grid React component
import Image from 'next/image'; // Import Next.js Image component
import 'ag-grid-community/styles/ag-grid.css'; // Import AG Grid core CSS
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Import AG Grid Alpine theme
import '../globals.css'; // Import global styles including your color palette

import { Grid, GridItem, Box } from '@chakra-ui/react'; // Import Chakra UI components
import Summary from '../components/Summary'; // Import Summary component

const Inventorypage = () => {
  // Define the data for the grid
  const [rowData, setRowData] = useState([
    { ingredientId: "004", name: "Butter", unitPrice: 3.2, currentQuantity: 24, reservedQuantity: 23 },
    { ingredientId: "005", name: "Milk", unitPrice: 1.0, currentQuantity: 150, reservedQuantity: 50 },
    { ingredientId: "006", name: "Eggs", unitPrice: 0.5, currentQuantity: 59, reservedQuantity: 58 },
    { ingredientId: "007", name: "Yeast", unitPrice: 1.2, currentQuantity: 90, reservedQuantity: 30 },
    { ingredientId: "008", name: "Baking Powder", unitPrice: 0.9, currentQuantity: 120, reservedQuantity: 121 }, // This should calculate -1
    { ingredientId: "009", name: "Cocoa Powder", unitPrice: 4.5, currentQuantity: 50, reservedQuantity: 15 },
    { ingredientId: "010", name: "Vanilla Extract", unitPrice: 6.0, currentQuantity: 30, reservedQuantity: 10 },
    { ingredientId: "011", name: "Corn Starch", unitPrice: 2.2, currentQuantity: 110, reservedQuantity: 45 },
    { ingredientId: "012", name: "Olive Oil", unitPrice: 5.5, currentQuantity: 200, reservedQuantity: 61 },
    { ingredientId: "013", name: "Vinegar", unitPrice: 1.8, currentQuantity: 80, reservedQuantity: 20 },
    { ingredientId: "014", name: "Baking Soda", unitPrice: 0.7, currentQuantity: 250, reservedQuantity: 70 },
    { ingredientId: "015", name: "Brown Sugar", unitPrice: 1.7, currentQuantity: 140, reservedQuantity: 45 }
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
    const updatedData = rowData.map(row => {
      if (row.ingredientId === params.data.ingredientId) {
        return {
          ...row,
          [params.colDef.field]: params.newValue,
          quantityToBuy: params.data.currentQuantity - params.data.reservedQuantity // Recalculate quantity to buy
        };
      }
      return row;
    });
    setRowData(updatedData); // Update the rowData state with the recalculated values
  };

  // Function to set row style based on quantityToBuy being negative
  const getRowStyle = (params) => {
    if (params.data.quantityToBuy < 0) {
      return { color: 'red', fontWeight: 'bold' }; // Apply red text and bold style
    }
    return null;
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
      
      {/* Chakra UI Grid */}
      <Grid
        templateRows="7fr 3fr" // 7/10 for AG Grid, 3/10 for the bottom grid
        gap={4} // Space between the grids
        height="100vh" // Full viewport height
      >
        {/* AG Grid (7/10 of the page) */}
        <GridItem>
          <Box className="ag-theme-alpine custom-grid" style={{ height: '100%', width: '100%' }}>
            <AgGridReact
              rowData={rowData} // Row data for the grid
              columnDefs={columnDefs} // Column definitions for the grid
              defaultColDef={{ sortable: true, filter: true }} // Enable sorting and filtering
              onCellValueChanged={onCellValueChanged} // Handle cell changes
              getRowStyle={getRowStyle} // Apply row style conditionally
            />
          </Box>
        </GridItem>

        {/* Bottom Grid (3/10 of the page) */}
        <GridItem>
          <Box border="1px solid #ccc" p={4} height="100%" display="flex" justifyContent="center" alignItems="center">
            {/* Include the Summary Component here */}
            <Summary />
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Inventorypage;
