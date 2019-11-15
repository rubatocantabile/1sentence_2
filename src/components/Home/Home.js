import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css'
import { Layout, Menu, Icon } from 'antd';
import './Home.css'
const { Header, Content, Footer, Sider } = Layout;


class Home extends Component {
  constructor(props) {
    super(props)
     this.state = {
      collapsed: false
    }  
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  
  render() {
    return (
      <>  
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="light" mode="inline">
              <Menu.Item key="1">
                <Link to="">
                  <Icon type="edit" />
                  <span className="nav-text">쓰기</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="read" />
                <span className="nav-text">읽기</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="">
                  <Icon type="search" />
                  <span className="nav-text">찾기</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="login" />
                <span className="nav-text">로그인</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} >
              <div style={{ fontSize: "XX-large", textAlign: 'center'}}>1sentence </div>
            </Header>
            <section className="Content-section-layout">
              <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 600 }}>
                  <span>오늘은 어떤 하루였나요?</span><br/>
                  <span>당신의 이야기를 한줄로 정리해드립니다.</span><br/>
                  <span>...1sentence...</span>
               </div>
              </Content>
            </section>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
    </>
    )
  }
}
export default Home