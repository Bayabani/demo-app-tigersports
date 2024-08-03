"use client";

// app/layout.tsx
import { Layout } from 'antd';
import './global.css'; // If global.css is in the same directory as layout.tsx
import VerticalNavbar from './components/ParentNavBar'; // Import your vertical sidebar component
import TopBar from './components/TopBar'; // Import your top bar component
import LeftNavbar from './components/LeftNavBar'; // Import your left navbar component

const { Sider, Content } = Layout;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: '100vh', display: 'flex' }}>
          {/* Sidebar */}
          <Sider
            width={60}
            style={{
              background: '#F57C00',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              transition: 'width 0.3s',
              overflow: 'hidden', // Ensure sidebar itself does not scroll
              zIndex: 1,
            }}
            className="sidebar"
          >
            <VerticalNavbar />
          </Sider>

          {/* Main Layout */}
          <Layout style={{ marginLeft: 5, display: 'flex', flexDirection: 'column' }}>
            {/* Top Bar */}
            {/* Top Bar and Left Navbar */}
            <div style={{ position: 'fixed', top: 0, left: 60, right: 0, height: 60, background: '#fff', zIndex: 1 }}>
              <TopBar />
            </div>

            
            {/* Left Navbar */}
            <div
              style={{
                position: 'fixed',
                top: 60,
                left: 60,
                width: 200,
                height: 'calc(100vh - 60px)', // Full height minus top bar height
                background: '#001529', // Adjust if needed
                zIndex: 2,
                // overflow: 'hidden', // Ensure left navbar itself does not scroll
                transition: 'margin-left 0.3s',
              }}
              className="leftnavbar"
            >
              <LeftNavbar />
            </div>

            {/* Content Area */}
            <Layout style={{ marginTop: 60, marginLeft: 260, flex: 1 }}>
              <Content
                style={{
                  padding: '20px',
                  overflow: 'auto',
                }}
                className="content"
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </Layout>

        <style jsx global>{`
          .sidebar:hover ~ .topbar,
          .sidebar:hover ~ .content {
            margin-left: 200px; /* Adjusted for expanded sidebar */
          }

          .topbar:hover ~ .content {
            margin-left: 260px; /* Adjusted for expanded LeftNavbar */
          }
        `}</style>
      </body>
    </html>
  );
}
