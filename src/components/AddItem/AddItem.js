import React, {Component} from 'react';
import { connect } from 'react-redux';

class AddItem extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_ITEM',
      payload: this.props.store.newItem
    })
  }
  handleChange = (propertyName) => (event) => {
    this.props.dispatch({
      type: 'SET_NEW_ITEM',
      payload: {...this.props.store.newItem, [propertyName]: event.target.value}
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="url" placeholder="image url" onChange={this.handleChange('imageUrl')}></input>
          <textarea type="text" placeholder="description" onChange={this.handleChange('description')}></textarea>
          <br /><input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }
}

const mapStore = store => ({
  store
})
export default connect(mapStore)(AddItem);
