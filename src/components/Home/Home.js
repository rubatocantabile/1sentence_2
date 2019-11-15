import React, { Component } from 'react';
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
            <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Icon type="edit" />
                <span className="nav-text">쓰기</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="read" />
                <span className="nav-text">읽기</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="search" />
                <span className="nav-text">찾기</span>
              </Menu.Item>
              <Menu.Item>
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
                <div style={{ padding: 24, background: '#fff', minHeight: 600 }}>content</div>
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