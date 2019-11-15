import React, { Component } from 'react'
import 'antd/dist/antd.css'; 
import './App.css';
import Home from './components/Home/Home'
import { Route, Switch, Link } from 'react-router-dom'
import NormalLoginForm from './components/NormalLoginForm/Login';
import { Button, Layout } from 'antd'

// const { Header, Footer, Sider } = Layout;

export default class App extends Component {


  render () {
    return (
      <>
       <Layout>
          <section className="Content-section-layout">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/login" component={NormalLoginForm} />
              <Route render={(_) => (
                  <div className="App-section-layout2">
                    <h2>이 페이지는 존재하지 않습니다.</h2><hr />
                    <Link to="/">
                      <Button type='primary'>홈으로 이동</Button>
                    </Link>
                  </div> )}/>
              </Switch>
            </section>
        </Layout>
      </>
    )          
  }
}