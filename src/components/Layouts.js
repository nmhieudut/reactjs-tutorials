import React, { Component } from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  DownSquareOutlined,
  PicCenterOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Layouts extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<PicCenterOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<DownSquareOutlined />} />
            </Menu>
          </Sider>
          <Layout style={{ minHeight: "660px" }}>
            <Header style={{ backgroundColor: "white" }}>
              <Avatar size={48} icon={<UserOutlined />} />
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
