import React from 'react';
import { Sider, Menu } from 'antd';
import { AiOutlineDashboard, GiPodiumWinner, IoGameController, FaFileInvoice, RiSecurePaymentFill, FaMoneyCheck, FaUserPlus } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import Smbrand from '../../../assets/images/icon-1.png';
import Brand from '../../../assets/images/logo2.png';

const { SubMenu } = Menu;

const Sidebar = ({ collapsed, isMobile }) => {
  const Navigate = useNavigate()
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={200}
      style={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0 }}
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
        items={[
          {
            key: 'dashboard',
            icon: <AiOutlineDashboard className='fs-4' />,
            label: 'Dashboard ',
          },
          {
            key: 'lottery ',
            icon: <GiPodiumWinner className='fs-4' />,
            label: 'Lottery ',
          },
          {
            key: 'games',
            icon: <IoGameController className='fs-4' />,
            label: 'Games',

          },
          {
            key: 'invoice',
            icon: <FaFileInvoice className='fs-4' />,
            label: 'Invoice',
          },
          {
            key: 'addpayment',
            icon: <RiSecurePaymentFill className='fs-4' />,
            label: 'Add Payment',
          },
          {
            key: 'withdrawpayment',
            icon: <FaMoneyCheck className='fs-4' />,
            label: 'Withdraw Payment',
          },
          {
            key: 'totalpayment',
            icon: <FaFileInvoice className='fs-4' />,
            label: 'Total Payment',
          },
          {
            key: 'managelottery',
            icon: <GiPodiumWinner className='fs-4' />,
            label: 'Manage Lottery',
          },
          {
            key: 'manageusers',
            icon: <FaFileInvoice className='fs-4' />,
            label: 'Manage Users',
          },
          {
            key: 'managegames',
            icon: <IoGameController className='fs-4' />,
            label: 'Manage Games',
          }
        ]}
      />
    </Sider>
  )
}

export default Sidebar
