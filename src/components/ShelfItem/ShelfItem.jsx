import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardMedia, CardContent, Button, Grid } from '@material-ui/core';
import './ShelfItem.css'

class ShelfItem extends Component {
    handleClick = (event) => {
        console.log('in delete', this.props.itemDetail.id);
        this.props.dispatch({ type: 'DELETE_ITEM', payload: this.props.itemDetail.id })
    }

    render() {
        console.log(this.props.itemDetail)
        return (
            <Grid item xs>
                <Card className="card">
                    <CardMedia image={this.props.itemDetail.image_url} className="image" />
                    <CardContent>
                        <p>{this.props.itemDetail.description}</p>
                    </CardContent>
                    <Button onClick={this.handleClick}>DELETE</Button>
                </Card>
            </Grid>
        )
    }
}

export default connect()(ShelfItem);