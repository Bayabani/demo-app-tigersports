"use client";

import { Menu } from 'antd';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import './LeftNavBar.css'; // Import the CSS file

const LeftNavBar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 60, // Adjust based on TopBar height
        left: 60, // Adjust based on Sidebar width
        width: '200px',
        bottom: 0,
        backgroundColor: '#001529',
        zIndex: 2,
        // overflow: 'hidden', // Prevent scrolling within LeftNavbar
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          { key: '1', icon: <UserOutlined />, label: 'Manager account' },
          { key: '2', icon: <TeamOutlined />, label: 'Team lead account' },
          { key: '3', icon: <UserOutlined />, label: 'Agent account' },
        ]}
      />
    </div>
  );
};

export default LeftNavBar;
