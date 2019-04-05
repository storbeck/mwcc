import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { closeForm } from "../actions/formActions";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
    open: state.form.open
})

class FormDialogConnect extends React.Component {
    
  state = {
    open: false,
  };

  handleClose = () => {
    this.props.dispatch(closeForm());
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Contact us to schedule a free inspection.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone Number"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const FormDialog = connect(mapStateToProps)(FormDialogConnect);
export default FormDialog;