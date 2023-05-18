import React, { useState } from "react";

function OrderForm({ productId }) {
    const [customerName, setCustomerName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary actions with the form data
        console.log("Customer Name:", customerName);
        console.log("Phone:", phone);
        console.log("Email:", email);
        // Reset the form
        setCustomerName("");
        setPhone("");
        setEmail("");
    };

    return (
        <div className="order-form">
            <h2>Order Form</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="customerName">Customer Name:</label>
                    <input
                        type="text"
                        id="customerName"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <input type="hidden" name="productId" value={productId} />
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default OrderForm;
