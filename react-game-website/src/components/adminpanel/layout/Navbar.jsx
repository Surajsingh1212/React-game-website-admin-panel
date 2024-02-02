import React from 'react';
import { Button, Dropdown, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, GoBellFill } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ProfileAvatar from '../../../assets/images/table-image-5.png';

const { Header } = Layout;
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

const Navbar = ({ collapsed, setCollapsed, isMobile, mapData }) => {
  // handle hover menu click
 const handleMenuClick = ({ key }) => {
  if (key === 'logout') {
    handleLogout();
  } else {
    Navigate(key);
  }
};

  const hoverMenu = (
    <Menu onClick={handleMenuClick}>
      {hoverItem.map(item => (
        <Menu.Item key={item.key} >
          <Link to={item.to} className='Link'>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

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
        Name: userData.MemberName,MCode: userData.MemberCode
      })
    }
  }, [])

  return (
    <Header className='d-flex justify-content-between pe-4 sticky-top' style={{
       padding: 0,
       background: colorBgContainer,
     }}>
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
    {/* Mobile views logo start */}
    {isMobile ? (
      <div className='sm-logo'>
        {/* Mobile Logo */}
      </div>
    ) : (
      ''
    )}
    {/* Mobile views logo end */}

    <div className='d-flex gap-3 align-item-center'>
      <div className='position-relative'>
        <GoBellFill className="align-item-center fs-2 p-2" style={{ backgroundColor: '#2e1b5d', borderRadius: '5px' }} />
      </div>

      <div className="d-flex gap-3 align-item-center">
        <div>
          <Dropdown overlay={hoverMenu}>
            <img src={ProfileAvatar} alt="avatar" style={{ height: "40px", width: "40px", cursor: "pointer" }} />
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
  )
}

export default Navbar
