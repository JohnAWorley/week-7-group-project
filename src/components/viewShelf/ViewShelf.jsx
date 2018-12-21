import React, {Component} from 'react';
import {connect} from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';
import Count from '../Count/Count';
import { Grid } from '@material-ui/core';


const mapStateToProps = reduxState => ({
    reduxState, 
});

class ViewShelf extends Component {
    componentDidMount(){
        this.props.dispatch({
            type: 'FETCH_SHELF'
        })
       
    }
   
    
    render(){
        let shelfList = this.props.reduxState.shelf.map(item=>{
            return (
                <ShelfItem key={item.id} itemDetail={item} />
            )
        })
      
         return(
             <Grid container spacing={24}>
                 {shelfList}
                 <Count />
             </Grid>

         )
    }
   
}

export default connect(mapStateToProps)(ViewShelf);