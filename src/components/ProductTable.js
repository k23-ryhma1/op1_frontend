import React from "react"
import { AgGridReact } from 'ag-grid-react'

function ProductTable (props) {

    const columns = [
        {headerName: "Tyyppi", field: "type.type" , sortable: true , filter: true , floatingFilter: true},
        {headerName: "Nimi", field: "name" , sortable: true , filter: true , floatingFilter: true},
        {headerName: "Hinta", field: "price" , sortable: true , filter: true , floatingFilter: true},
        {headerName: "Valmistaja", field: "manufacturer.name" , sortable: true , filter: true , floatingFilter: true},
        {headerName: "Koko", field: "size.clothingSize" , sortable: true , filter: true , floatingFilter: true}
    ]

    const gridOptions = {
        animateRows: true,
        enableColResize: true,
     }

    return (
        <div className="ag-theme-material"
        style={{height: '700px', width: '80%', margin: 'auto'}} >
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