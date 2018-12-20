import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState, 
});

class ViewShelf extends Component {
    render(){
         return(
             <h1>hey</h1>
         )
    }
   
}

export default connect(mapStateToProps)(ViewShelf);