import React from "react"
import { AgGridReact } from 'ag-grid-react'
import AddOrder from "./AddOrder"

function ProductTable (props) {

    const columns = [
        {headerName: "Tyyppi", field: "type.type" , sortable: true , filter: true , floatingFilter: true},
        {headerName: "Nimi", field: "name" , sortable: true , filter: true , floatingFilter: true},
        {headerName: "Hinta", field: "price" , sortable: true , filter: true , floatingFilter: true},
        {headerName: "Valmistaja", field: "manufacturer.name" , sortable: true , filter: true , floatingFilter: true},
        {headerName: "Koko", field: "size.clothingSize" , sortable: true , filter: true , floatingFilter: true},
        { headerName: "", field: "id",
            cellRenderer: (params) => (
                <AddOrder addOrder={addOrder} params={params}/>
            )}]

    const gridOptions = {
        animateRows: true,
        enableColResize: true,
    };

     const addOrder = (order) => {
        console.log(order)
        fetch("https://localhost:8080/api/orderinfoes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
        }).then((response) => {
            if (response.ok) {
                props.fetchData()
            }
        })
    }

    return (
        <div className="ag-theme-material"
        style={{height: '700px', width: '100%', margin: 'auto'}} >
        <AgGridReact
            rowSelection="single"
            columnDefs={columns}
            rowData={props.products}
            gridOptions={gridOptions}>
        </AgGridReact>
        </div>
    );
}

export default ProductTable
