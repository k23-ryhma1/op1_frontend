import React, {useState} from "react"
import { Button } from "@mui/material"
import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"
import TextField from "@mui/material/TextField"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import SendIcon from '@mui/icons-material/Send'

function AddOrder ({addOrder}) {
    const [open, setOpen] = useState(false)
    const [customer, setCustomer] = useState({
    
    })
    const [order, setOrder] = useState({
        date: '',
        customer: '',
        orderstatus: ''
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleCloser = () => {
        addOrder(order)
        setOpen(false)
    }

    const handleCanceler = () => {
        setOpen(false)
    }

    const inputChanged = (event) => {
        setOrder({ ...order, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <div style={{ display: "flex", width: '94%' }}>
            <Button style={{ marginLeft: "auto" }} variant="contained" onClick={handleClickOpen}>
                Add order
            </Button>
            </div>
            <Dialog onClose={handleCloser} open={open}>
                <DialogTitle>New order</DialogTitle>
                <DialogContent>
                    <TextField
                        name="date"
                        value={order.date}
                        autoFocus
                        margin="dense"
                        label="Date"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="customer"
                        margin="dense"
                        value={order.customer}
                        label="customer"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="email"
                        value={order.email}
                        margin="dense"
                        label="Email"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="phone"
                        value={order.phone}
                        margin="dense"
                        label="Phone"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="streetaddress"
                        value={order.streetaddress}
                        margin="dense"
                        label="Streetaddress"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="postcode"
                        value={order.postcode}
                        margin="dense"
                        label="Postcode"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="city"
                        value={order.city}
                        margin="dense"
                        label="City"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <DialogActions>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={handleCloser}>Save</Button>
                        <Button onClick={handleCanceler}>Cancel</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddOrder