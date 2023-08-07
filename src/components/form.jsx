import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";




const DialogComponent = ({open, handleClose, name, id}) => {
    
    
  const handleSubmit = (e)=>{
    e.preventDefault()
    let arrx = JSON.parse(localStorage.getItem('bookings'))
    arrx.push(formData)
    localStorage.setItem('bookings', JSON.stringify(arrx))
    handleClose()
  }
  const [formData, setFormData] = useState({
    name:name,
    iD:id,
    Date:'',
    ShowNumber:'',
    Tickets:'',
  });
  
  const change = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book Your Show</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the details</DialogContentText>
        </DialogContent>
        <DialogContent className="dx">
          <form action="#" id="addMeet" className="form" onSubmit={(e)=>{
           handleSubmit(e);
            
          }}>
            Title
            <input
              type="text"
              className="inp"
              name="name"
              placeholder="Enter the show name"
              value={formData.name}
              id="1"
              required
              onChange={change}
            />
            Date
            <input
              type="text"
              className="inp"
              name="Date"
              placeholder="Enter the Date DD/MM/YYYY"
              value={formData.Date}
              id="2"
              onChange={change}
            />
            iD
            <input
              type="text"
              className="inp"
              name="iD"
              placeholder="Enter the id of the show"
              value={formData.iD}
              id="3"
              onChange={change}
            />
            ShowNumber
            <input
              type="text"
              className="inp"
              id="4"
              name="ShowNumber"
              placeholder="Enter the show number"
              value={formData.ShowNumber}
              onChange={change}
            />
            Tickets
            <input
              type="text"
              className="inp"
              id="5"
              name="Tickets"
              placeholder="Number of tickets"
              value={formData.Tickets}
              onChange={change}
            />
            
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <button className="sbtn" type="submit" form="addMeet">
            SUBMIT
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogComponent;