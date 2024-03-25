import { useState, useContext } from 'react'
import { Input } from 'antd'
import Image from 'next/image'
import MyContext from './MyContext'
import styles from './home.module.css'

const { Search } = Input;

export default function MyHeader () {
  const {
    searchTxt,
    setSearchTxt,
  } = useContext(MyContext)
  
  const handleChange = (e) => {
    setSearchTxt(e.target.value)
  }
  
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        <div className={styles.siteName}>MyWebsite</div>
      </div>

      <div className={styles.headerRight}>
        <Search value={searchTxt} onChange={handleChange} placeholder="请输入关键字" />

        <a href="/" className={styles.signIn}>sign in</a>
      </div>
    </div>
  )
}
