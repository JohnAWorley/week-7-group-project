import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";


class Count extends Component {
  componentDidMount(){
    this.props.dispatch({type: 'FETCH_COUNT'})
  }
  render ()  {
  
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell># of Items</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {this.props.reduxStore.count.map((item , i) =>{
          return(<TableRow key={i}>
            <TableCell>{item.username}</TableCell>
            <TableCell>{item.count}</TableCell>
          </TableRow>)
        })}
        </TableBody>
        </Table>
      </div>
    )
    
  }
}
const mapStateToProps = (reduxStore) =>{
  return{
    reduxStore
  }
}

export default connect(mapStateToProps)(Count);