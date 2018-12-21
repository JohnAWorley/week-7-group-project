import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, DialogActions, DialogContentText, 
    DialogContent, DialogTitle } from '@material-ui/core';

class DeleteConf extends Component {
    handleClose = (choseDelete) => {
        // this.props.dispatch({ type: 'SET_CHOICE', payload: choseDelete });
        if (choseDelete) {
            this.props.dispatch({ type: 'DELETE_ITEM' , payload: this.props.reduxStore.confirm.id});
        }
        // this.props.dispatch({ type: 'SET_CHOICE', payload: true });
        this.props.dispatch({ type: 'DIALOG_CLOSE' });
    }
    render() {
        return (
                <div>
                    <Dialog
                        open={this.props.reduxStore.confirm.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Confirm Deletion?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                You did not enter this item. Delete anyway?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => this.handleClose(false)} color="primary">
                                Don't Delete
                            </Button>
                        <Button onClick={() => this.handleClose(true)} color="primary" autoFocus>
                                Delete Item
                        </Button>
                        </DialogActions>
                    </Dialog>
            </div>
        );

    }
}
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(DeleteConf);