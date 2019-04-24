import React, { createRef, useState } from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import SignatureCanvas from 'react-signature-canvas'

import Letter from './Letter'

function App() {
  const ref = createRef()
  const [signature, setSignature] = useState('')
  const [open, setOpen] = useState(false)
  const handleOnClick = () => {
    const registerSignature = ref.current
    const data = registerSignature.toDataURL('image/png')
    if (registerSignature.isEmpty()) {
      return alert("Please provide a signature first.");
    }
    setSignature(data)
    handleClose()
  }
  const handleClear = () => {
    const registerSignature = ref.current
    registerSignature.clear()
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="app">
      <Letter />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <SignatureCanvas 
            backgroundColor="rgb(255, 255, 255)" 
            canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
            ref={ref}
          />
          <DialogActions>
            <Button onClick={() => handleOnClick()} variant="outlined" color="primary">
              Save
            </Button>
            <Button onClick={() => handleClear()} variant="outlined" color="primary">
              Clear
            </Button>
            <Button onClick={() => handleClose()} variant="outlined" color="primary">
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      
      
      <div className="img-signature" onClick={() => handleOpen()}>
        Signature<br />
        {
          signature ? <img src={signature} alt="singature" /> : <div className="empty" />
        }
        Mr.Akharawit Signature
      </div>
    </div>
  );
}

export default App;
