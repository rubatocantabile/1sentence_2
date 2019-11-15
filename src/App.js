import React, { Component } from 'react'
import 'antd/dist/antd.css'; 
import './App.css';
import Home from './components/Home/Home'
import { Route } from 'react-router-dom'



export default class App extends Component {


  render () {
    return (
      <div>
        <Route path="/" component={Home} />
      </div>     
    )
  }
}