import { AgGridReact } from 'ag-grid-react'
import React from 'react';
import { Button } from '@mui/material';


function ManufacturerTable (props) {

    const columns = [
        {headerName: "Nimi", field: "name" , sortable: true , width: '300px'},
        { headerName: "", field: "id", 
            cellRenderer: (params) => (
                <div>
                <Button variant="outlined" onClick={() => props.fetchProducts(params.value)}>Listaa tuotteet</Button>
                </div>
            )}
    ]

    const gridOptions = {
        animateRows: true,
        enableColResize: true,
     }

    return (
        <div className="ag-theme-material"
        style={{height: '300px', width: '50%', margin: 'auto'}} >
        <AgGridReact
            rowSelection="single"
            columnDefs={columns}
            rowData={props.manufacturers}
            gridOptions={gridOptions}>
        </AgGridReact>
        </div>
    )}

export default ManufacturerTable