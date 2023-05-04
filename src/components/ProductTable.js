import React from "react"
import { AgGridReact } from 'ag-grid-react'

function ProductTable (props) {

    const columns = [
        {field: "name" , sortable: true , filter: true , floatingFilter: true},
        {field: "type.name" , sortable: true , filter: true , floatingFilter: true},
        {field: "price" , sortable: true , filter: true , floatingFilter: true},
        {field: "manufacturer.name" , sortable: true , filter: true , floatingFilter: true}
    ]

    const gridOptions = {
        animateRows: true,
        enableColResize: true,
     }

    return (
        <div className="ag-theme-material"
        style={{height: '700px', width: '70%', margin: 'auto'}} >
        <AgGridReact
            rowSelection="single"
            columnDefs={columns}
            rowData={props.products}
            gridOptions={gridOptions}>
        </AgGridReact>
        </div>
    )
}

export default ProductTable