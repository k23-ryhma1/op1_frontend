import React, {useState} from "react"
import { Button } from "@mui/material"
import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"
import TextField from "@mui/material/TextField"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import SendIcon from '@mui/icons-material/Send'

function AddOrder (props) {
    const [open, setOpen] = useState(false)
    const [order, setOrder] = useState({
        date: new Date(),
        customer: {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        },
        product: props.params.data,
        orderstatus: 'Tilaus vastaanotettu',
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleCloser = () => {
        props.addOrder(order)
        setOpen(false)
    }

    const handleCanceler = () => {
        setOpen(false)
    }

    const inputChanged = (event) => {
        setOrder({ ...order, customer: { ...order.customer, [event.target.name]: event.target.value }})
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
                        name="firstName"
                        margin="dense"
                        value={order.customer.firstName}
                        label="First name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="lastName"
                        margin="dense"
                        value={order.customer.lastName}
                        label="Last name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="email"
                        value={order.customer.email}
                        margin="dense"
                        label="Email"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="phone"
                        value={order.customer.phone}
                        margin="dense"
                        label="Phone"
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