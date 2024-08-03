"use client";

import React from 'react';
import { HomeOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const VerticalNavbar = () => {
  return (
    <div
      style={{
        width: '60px', // Set a fixed width
        height: '100vh',
        backgroundColor: '#F57C00',
        color: 'white',
        transition: 'width 0.3s', // Optional, for smooth transitions if you plan to add back expansion
      }}
      className="flex flex-col"
    >
      {/* Logo */}
      <div
        style={{
          backgroundColor: '#FB8C00',
          padding: '8px',
          textAlign: 'center',
        }}
      >
        <img src="/logo.png" alt="Logo" style={{ width: '120px' }} /> {/* Adjust logo size */}
      </div>

      {/* Navigation Links */}
      <Menu
        mode="vertical"
        theme="dark"
        style={{
          flex: 1,
          borderRight: 0,
          backgroundColor: '#F57C00',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '16px',
        }}
      >
        <Menu.Item key="home" icon={<HomeOutlined style={{ color: 'black', fontSize: '24px' }} />}>
          <span style={{ marginLeft: '10px' }}>Home</span>
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined style={{ color: 'black', fontSize: '24px' }} />}>
          <span style={{ marginLeft: '10px' }}>About</span>
        </Menu.Item>
        <Menu.Item key="contact" icon={<PhoneOutlined style={{ color: 'black', fontSize: '24px' }} />}>
          <span style={{ marginLeft: '10px' }}>Contact</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default VerticalNavbar;
