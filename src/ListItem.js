import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
    state =
        {
            compeleted: false,
            style: { textDecorationLine: "none" }
        }


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
            <li style={this.state.style} onClick={this.selected} >{this.props.item}

            </li>


        )
    }
}

export default List