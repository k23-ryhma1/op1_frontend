import React from "react"
import { AgGridReact } from 'ag-grid-react'

function ManufacturerTable (props) {

    const columns = [
        {headerName: "Nimi", field: "name" , sortable: true , filter: true , floatingFilter: true, width: '300px'}
    ]

    const gridOptions = {
        animateRows: true,
        enableColResize: true,
     }

    return (
        <div className="ag-theme-material"
        style={{height: '500px', width: '30%', margin: 'auto'}} >
        <AgGridReact
            rowSelection="single"
            columnDefs={columns}
            rowData={props.manufacturers}
            gridOptions={gridOptions}>
        </AgGridReact>
        </div>
    )
}

export default ManufacturerTable