import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'


class App extends Component {
  //set state to store data enterby user 
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

  clickSubmit = (event) => {
    event.preventDefault();
    //
    let newItem = this.state.formData
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
  render() {
    const lists = this.state.list.map(item => <ListItem item={item.item} />)
    return (

      <div className="App">
        <form onSubmit={this.clickSubmit} className="style">
          <h1 className="set">To Do List </h1>
          <input type="text" value={this.state.formData.item} onChange={this.hadelChange} className="setButtom" />
          <button type="submit" className="button1">Submit</button>
          <button onClick={this.clearList} className="button2">Clear List</button>

        </form>

        <ul>
          {lists}
        </ul>
      </div>

    )

  }

}

export default App;
