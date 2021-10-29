import "./App.css";

import React from "react";

import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Questionnaire from "./components/Questionnaire";

function App() {
  const { Content, Footer, Sider } = Layout;

  return (
    <div>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo">
            <img
              alt="fastyslim"
              src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-logo.png"
              className="fastyslim-logo"
            />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Questionnaire
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <Questionnaire />
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Layout>
      ,
    </div>
  );
}

export default App;
