import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'


class App extends Component {
  //set state to store data enter by user 
  state = {

    formData: {
      item: '',
    },
    list: []

  }

  //handel change data 
  hadelChange = (e) => {
    this.setState({
      formData: {
        item: e.target.value
      }
    })
  }

  //add data to list
  clickSubmit = (event) => {
    event.preventDefault();
    //crearte new varible and save state data from list
    let newItem = this.state.formData
    //take copy of array from list 
    const copyArray = this.state.list.slice(0)
    //add a new data to the array list
    newItem.item = this.state.formData.item;
    //add the new list data to the array
    //use the state with our new array copy 

    if (newItem.item !== "") {
      copyArray.push(newItem);
      this.setState({

        list: copyArray,
        formData: {
          item: ""
        }
      })
    }

  }
  clearList = () => {
    this.setState({
      list: []
    })
  }
  //clear single item from list 
  clearItem = (delet) => {
    const remItem = this.state.list.filter(items => {
      return this.list !== delet
    })
    this.setState({ formData: remItem })

  }

  render() {
    //set state to go through the map list to return list in new array
    const lists = this.state.list.map(item =>
      //pass item to listitem component through props
      <ListItem item={item.item} clearItem={this.clearItems} />)
    return (
      <div className="App container p-5 mt-5">
        <h1 className="set">To Do List </h1>
        <form onSubmit={this.clickSubmit} className="mb-3">
          <div className="input-group">
            <input className="form-control" type="text"
              placeholder="Enter task ...." value={this.state.formData.item} onChange={this.hadelChange} />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-secondary">Add</button>
              <button onClick={this.clearList} className="btn btn-outline-secondary">Clear List</button>
            </div>
          </div>
        </form>
        <div>
          {lists}
          <span className="set2"> 😊 Let start to Do list App Experience </span>
        </div>
        <span className="footer" >Copyright © 2019 By Nahed Hawsawi</span>

      </div>
    )

  }

}

export default App;
