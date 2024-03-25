import { useState } from 'react'
import { MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import styles from './home.module.css'

function getItem(label, key, icon, children, theme) {
  return {
    key,
    icon,
    children,
    label,
    theme,
  };
}

export default function MyMenu () {
  const [current, setCurrent] = useState('1');

  const items = [
    getItem(
      'Navigation One',
      'sub1',
      <MailOutlined />,
      [getItem('Option 1', '1'), getItem('Option 2', '2'), getItem('Option 3', '3')],
    ),
    getItem('Navigation Two', 'sub2'),
    getItem('Navigation Three', 'sub3'),
    getItem(
      'Navigation Four',
      'sub4',
      <MailOutlined />,
      [getItem('Option 4', '4'), getItem('Option 5', '5'), getItem('Option 6', '6')],
    ),
    getItem(
      'Navigation Four',
      'sub5',
      <MailOutlined />,
      [getItem('Option 7', '7'), getItem('Option 8', '8'), getItem('Option 9', '9')],
    ),
  ];

  const handleClick = (e) => {
    setCurrent(e.key);
  }

  return (
    <div className={styles.menuContainer}>
      <Menu
        onClick={handleClick}
        style={{
          width: 256,
        }}
        selectedKeys={[current]}
        defaultOpenKeys={["sub1", "sub4", "sub5"]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  )
}
