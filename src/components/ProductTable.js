import React from "react";
import { AgGridReact } from 'ag-grid-react';

function ProductTable({ products, getOrderFormLink, fetchData }) {
    const columns = [
        { headerName: "Tyyppi", field: "type.type", sortable: true, filter: true, floatingFilter: true },
        { headerName: "Nimi", field: "name", sortable: true, filter: true, floatingFilter: true },
        { headerName: "Hinta", field: "price", sortable: true, filter: true, floatingFilter: true },
        { headerName: "Valmistaja", field: "manufacturer.name", sortable: true, filter: true, floatingFilter: true },
        { headerName: "Koko", field: "size.clothingSize", sortable: true, filter: true, floatingFilter: true },
        {
            headerName: "Order Form",
            field: "productId",
            cellRendererFramework: (params) => {
                const productId = params.value;
                const orderFormLink = getOrderFormLink(productId);
                return (
                    <a href={orderFormLink} target="_blank" rel="noopener noreferrer">
                        Order Now
                    </a>
                );
            }
        }
    ];

    const gridOptions = {
        animateRows: true,
        enableColResize: true,
    };

    return (
        <div
            className="ag-theme-material"
            style={{ height: '700px', width: '80%', margin: 'auto' }}
        >
            <AgGridReact
                rowSelection="single"
                columnDefs={columns}
                rowData={products}
                gridOptions={gridOptions}
                onGridReady={fetchData}
            />
        </div>
    );
}

export default ProductTable;
