import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
    //set state to defult data
    state =
        {
            compeleted: false,
            style: { textDecorationLine: "none" }
        }

    //create function for selected stated and set it to defualt
    selected = () => {
        if (this.state.compeleted) {
            this.setState({ compeleted: false, style: { textDecorationLine: "none" } })
        }
        else {
            this.setState({ compeleted: true, style: { textDecorationLine: "line-through" } })
        }
    }

    render() {
        return (
            <p style={this.state.style} onClick={this.selected} > ✎ {this.props.item}
                {this.clearItem}
            </p>


        )
    }
}

export default List