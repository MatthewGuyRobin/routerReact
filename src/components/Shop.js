import React, { Component } from 'react'

export default class Shop extends Component (props) {
    render(){

    return (
        <div>
            <h1>Shop component</h1>
            <p>Add item to Basket</p>
            <button onClick={props.add}>Add</button>
        </div>
    )
}
}