import React, { Component } from 'react';
import {connect} from 'react-redux';



class Count extends Component {
  componentDidMount(){
    this.props.dispatch({type: 'FETCH_COUNT'})
  }
  render ()  {
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
        {this.props.reduxStore.count.map((item , i) =>{
          return(<tr key={i}>
            <td>{item.username}</td>
            <td>{item.count}</td>
          </tr>)
        })}
        </tbody>
        </table>
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