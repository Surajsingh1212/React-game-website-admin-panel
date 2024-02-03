import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { FaFileInvoice, FaUserPlus } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa6";
import { GiPodiumWinner } from "react-icons/gi";
import { GoBellFill } from "react-icons/go";
import { IoGameController } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Smbrand from '../../../assets/images/icon-1.png';
import Brand from '../../../assets/images/logo2.png';
import ProfileAvatar from '../../../assets/images/table-image-5.png';
import './FullLayout.css';

const { Header, Sider, Content } = Layout;

const hoverItem = [
  {
    key: 'profile',
    label: 'Profile ',
    to: 'profile'
  },
  {
    key: 'changepassword',
    label: 'Change Passowrd',
    to: 'changepassword'
  },
  {
    key: 'logout',
    label: 'Logout',
  },
];

const FullLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const Navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // handle hover menu click
  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      handleLogout();
    } else {
      Navigate(key);
    }
  };
  //header user icon click menu items 
  const hoverMenu = (
    <Menu onClick={handleMenuClick}>
      {hoverItem.map(item => (
        <Menu.Item key={item.key} >
          <Link to={item.to} className='Link'>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  // handle logout 

  const handleLogout = () => {
    localStorage.clear();
    Navigate('/');
  };
  // map user login data 
  const [mapData, setMapData] = useState({
    Name: '', MCode: ''
  })
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'))
    if (userData) {
      setMapData({
        Name: userData.MemberName, MCode: userData.MemberCode
      })
    }

  }, [])

  // defined user based menu item 
  const userdetails  = JSON.parse(localStorage.getItem('user'));
  const isAdmin  = userdetails?.Email === 'mrx@gmail.com' && userdetails?.MemberId === 'hpoTowNTzvNX8Y18dVcN/g==';
  // menu items for admin login
  const adminMenuItems=[
    {
      key: 'dashboard',
      icon: <AiOutlineDashboard className='fs-4' />,
      label: 'Dashboard ',
    },
    {
      key: 'games',
      icon: <IoGameController className='fs-4' />,
      label: 'Games',
    },
    {
      key: 'managelottery',
      icon: <GiPodiumWinner className='fs-4' />,
      label: 'Lottery',
    },
    {
      key: 'managegames',
      icon: <IoGameController className='fs-4' />,
      label: 'Games',
    },
    {
      key: 'manageusers',
      icon: <FaUserPlus className='fs-4' />,
      label: 'Users',
    },
    {
      key: 'invoice',
      icon: <FaFileInvoice className='fs-4' />,
      label: 'Invoice',
    }
  ]
  // menu item for user login
  const userMenuItems=[
    {
      key: 'games',
      icon: <IoGameController className='fs-4' />,
      label: 'Games',
    },
    {
      key: 'lottery ',
      icon: <GiPodiumWinner className='fs-4' />,
      label: 'Lottery ',
    },
    {
      key: 'addpayment',
      icon: <RiSecurePaymentFill className='fs-4' />,
      label: 'Deposit',
    },
    {
      key: 'withdrawpayment',
      icon: <FaMoneyCheck className='fs-4' />,
      label: 'Withdraw',
    },
    {
      key: 'totalpayment',
      icon: <FaFileInvoice className='fs-4' />,
      label: 'History',
    },

  ]
  return (
    <>
      <Layout>
        {isMobile ? (
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={200}
            style={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0, }}

          >
            <div className="demo-logo-vertical pt-1">
              {collapsed ? <img src={Smbrand} height='50px' alt='Brand' /> : <img src={Brand} height='50px' alt='Brand' />}
            </div>
            <Menu
              theme="transparent"
              mode="inline"
              defaultSelectedKeys={['']}
              onClick={({ key }) => {
                if (key === "signout") {
                }
                else {
                  Navigate(key);
                }
              }}
              items={isAdmin ? adminMenuItems : userMenuItems} />

          </Sider>
        ) : (
          <Sider trigger={null} collapsible collapsed={collapsed} width={200} style={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0, }}>
            <div className="demo-logo-vertical pt-1">
              {collapsed ? <img src={Smbrand} height='50px' alt='Brand' /> : <img src={Brand} height='50px' alt='Brand' />}
            </div>
           {isAdmin ? (
            <Menu
            theme="transparent"
            mode="inline"
            defaultSelectedKeys={['']}
            onClick={({ key }) => {
              if (key === "signout") {
              }
              else {
                Navigate(key);
              }
            }}
            items={adminMenuItems}/>
           ):(
            <Menu
            theme="transparent"
            mode="inline"
            defaultSelectedKeys={['']}
            onClick={({ key }) => {
              if (key === "signout") {
              }
              else {
                Navigate(key);
              }
            }}
            items={userMenuItems}/>
           )}
          </Sider>
        )}

        <Layout>

          <Header
            className='d-flex justify-content-between pe-4 sticky-top'
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >

            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            {/* mobile views  logo start*/}
            {isMobile ? (
              <div className='sm-logo'>
                <img src={Brand} height='40px' alt='brand' />
              </div>) : (
              ''
            )}
            {/* mobile views  logo end*/}

            <div className='d-flex gap-3 align-item-center'>
              <div className='position-relative'>
                <GoBellFill className=" align-item-center fs-2 p-2" style={{ backgroundColor: '#2e1b5d', borderRadius: '5px' }} />
              </div>

              <div className="d-flex gap-3 align-item-center">
                <div>
                  <Dropdown
                    overlay={hoverMenu}
                  >
                    <img src={ProfileAvatar} alt="avtar"
                      style={{
                        height: "40px",
                        width: "40px",
                        cursor: "pointer"
                      }} />
                  </Dropdown>
                </div>
                {isMobile ? (
                  ''
                ) : (
                  <div>
                    <h6 className='mb-0'>{mapData.Name}</h6>
                    <p className='mb-0'>{mapData.MCode}</p>
                  </div>
                )}

              </div>

            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default FullLayout
