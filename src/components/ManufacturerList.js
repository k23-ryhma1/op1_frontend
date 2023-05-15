import React, { useEffect, useState } from "react"
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import ManufacturerTable from "./ManufacturerTable"
import ManufacturerProductsTable from "./ManufacturerProductsTable"

function ManufacturerList () {
    const [manufacturers, setManufacturers] = useState([])
    const [manufacturerProducts, setManufacturerProducts] = useState([])

    useEffect(() => fetchData(), [])
    useEffect(() => fetchProducts(), [])

    const fetchData = () => {
        fetch('http://localhost:8080/api/manufacturers')
        .then(response => response.json())
        .then(data => {setManufacturers(data);
        console.log(data)})
    }

    const fetchProducts = (id) => {
        fetch(`http://localhost:8080/api/manufacturerproducts/${id}`)
        .then(response => response.json())
        .then(data => setManufacturerProducts(data))
        console.log(manufacturerProducts)
    }

    return (
        <div class="ag-theme-material">
            <h1>Valmistajat</h1>
            <ManufacturerTable manufacturers={manufacturers} fetchData={fetchData} fetchProducts={fetchProducts}/>
            <ManufacturerProductsTable manufacturerProducts={manufacturerProducts}/>
        </div>
    )
}

export default ManufacturerList