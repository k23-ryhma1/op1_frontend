import React, { useEffect, useState } from "react"
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import ManufacturerTable from "./ManufacturerTable"

function ManufacturerList () {
    const [manufacturers, setManufacturers] = useState([])

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('http://localhost:8080/api/manufacturers')
        .then(response => response.json())
        .then(data => {setManufacturers(data);
        console.log(data)})
    }

    return (
        <div class="ag-theme-material">
            <ManufacturerTable manufacturers={manufacturers} fetchData={fetchData}/>
        </div>
    )
}

export default ManufacturerList