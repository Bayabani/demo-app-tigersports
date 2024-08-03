"use client";

// components/TopBar.tsx
import React from 'react';
import { Input, Dropdown, Menu, Avatar } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';

const { Search } = Input;

const TopBar = () => {
  const notificationMenu = (
    <Menu>
      <Menu.Item key="1">Notification 1</Menu.Item>
      <Menu.Item key="2">Notification 2</Menu.Item>
      <Menu.Item key="3">Notification 3</Menu.Item>
    </Menu>
  );

  const profileMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="flex w-full fixed top-0 left-0 z-10" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#fff', borderBottom: '1px solid #e8e8e8' }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>TigerSports</div>
      <Search placeholder="Search..." style={{ width: 200 }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Dropdown overlay={notificationMenu} trigger={['click']}>
          <BellOutlined style={{ fontSize: '20px', marginRight: '20px', cursor: 'pointer' }} />
        </Dropdown>
        <Dropdown overlay={profileMenu} trigger={['click']}>
          <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
        </Dropdown>
      </div>
    </div>
  );
};

export default TopBar;

