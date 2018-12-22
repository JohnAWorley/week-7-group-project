import React, { Component } from 'react';
import DeleteConf from '../DeleteConf/DeleteConf';
import { connect } from 'react-redux';
import { Card, CardMedia, CardContent, Button, Grid } from '@material-ui/core';
import './ShelfItem.css'

class ShelfItem extends Component {
    handleClick = (event) => {
        const userWhoEnteredItem = this.props.itemDetail.person_id;
        const userLoggedIn = this.props.store.user.id;
        if (userWhoEnteredItem !== userLoggedIn) {
            // display confirmation dialog, allow user to delete or not
            this.props.dispatch({ type: 'SET_ITEM_ID', payload: this.props.itemDetail.id });            
            this.props.dispatch({ type: 'DIALOG_OPEN' });            
        } else {
            // since this is the user's item, just delete
            this.props.dispatch({ type: 'DELETE_ITEM', payload: this.props.itemDetail.id });
        }
    }
    render() {
        return (
            <div>
            <Grid item xs>
                <Card className="card">
                    <CardMedia image={this.props.itemDetail.image_url} className="image" />
                    <CardContent>
                        <p>{this.props.itemDetail.description}</p>
                    </CardContent>
                    <Button onClick={this.handleClick}>DELETE</Button>
                </Card>
            </Grid>
            <DeleteConf />
            </div >
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        store
    }
}
export default connect(mapStoreToProps)(ShelfItem);