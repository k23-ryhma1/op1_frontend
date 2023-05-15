import React, { useEffect, useState } from "react"
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import ManufacturerProductsTable from "./ManufacturerProductsTable"

function ManufacturerProductList ({}) {
    const [manufacturerProducts, setManufacturerProducts] = useState([])

    useEffect(() => fetchData(), [])

    const fetchData = (id) => {
        fetch(`http://localhost:8080/api/manufacturerproducts/${id}`)
        .then(response => response.json())
        .then(data => setManufacturerProducts(data))
    }

    return (
        <div class="ag-theme-material">
            <ManufacturerProductsTable manufacturerProducts={manufacturerProducts} fetchData={fetchData}/>
        </div>
    )
}

export default ManufacturerProductList