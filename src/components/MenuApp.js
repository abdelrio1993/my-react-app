import React from "react";
import { HomeOutlined, ClusterOutlined } from "@ant-design/icons";

import Icon from "@ant-design/icons";

import { Menu } from "antd";
import { Link } from "react-router-dom";

const MenuApp = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Icon component={HomeOutlined} />
        <span>
          <Link to={"/"}>Inicio</Link>
        </span>
      </Menu.Item>

      <Menu.Item key="2">
        <Icon component={ClusterOutlined} />
        <span>
          <Link to={"/roles"}>Roles</Link>
        </span>
      </Menu.Item>
    </Menu>
  );
};

export default MenuApp;
