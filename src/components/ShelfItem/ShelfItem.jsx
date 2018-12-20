import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardMedia, CardContent, Button} from '@material-ui/core';
import './ShelfItem.css'

class ShelfItem extends Component {
    render(){
        console.log(this.props.itemDetail.image_url)
        return(
            <Card className="card">
                <CardMedia image={this.props.itemDetail.image_url} className="image"/>
                <CardContent>
                    <p>{this.props.itemDetail.description}</p>
                </CardContent>
                <Button>DELETE</Button>
            </Card>
        )
    }
}

export default connect()(ShelfItem);