import React, { useEffect, useState } from "react"
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import ProductTable from "./ProductTable"

function ProductList () {
    const [products, setProducts] = useState([])

    useEffect(() => fetchData(), [])

    //TODO
    //Front-End ja Back-End täytyy konfiguroida toimimaan
    const fetchData = () => {
        fetch('http://localhost:8080/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        console.log(products)
    }

    return (
        <div class="ag-theme-material">
            <ProductTable products={products} fetchData={fetchData}/>
        </div>
    )
}

export default ProductList