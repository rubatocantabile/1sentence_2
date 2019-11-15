import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, DatePicker } from 'antd';
import 'antd/dist/antd.css'

import './Home.css'

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class Home extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          {/* <div className="App-logo" /> */}
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>1sentence</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="edit" />
              <span>쓰기</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="read" /><span>읽기</span></span>}
            >
              <DatePicker />
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="user" /><span>로그인/ 회원가입</span></span>}
            >
              <Menu.Item key="6">로그인 및 회원가입</Menu.Item>
              <Menu.Item key="8">비밀번호 찾기</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="search" />
              <span>찾기</span>
            </Menu.Item>
          </Menu>
        </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 3}}>
          1sentence
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item></Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 600 }}>
            당신의 오늘은 어떠셨나요?
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
}
export default Home