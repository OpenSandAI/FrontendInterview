import { useState } from 'react'
import MyContext from './MyContext'
import MyHeader from './MyHeader'
import MyMenu from './MyMenu'
import MyList from './MyList'
import Myfooter from './Myfooter'
import styles from './home.module.css'

// 模拟数据
const markdownContent = `  
  # Welcome to My Website  
    
  This is an example of Markdown content.  
    
  - List item 1  
  - List item 2  
    
  ## Subheading  
    
  Some more text here.  
`

// 模拟数据
const myWebsite = "myWebsite"

export default function Home () {
  // 搜索关键字
  const [searchTxt, setSearchTxt] = useState("");

  return (
    <MyContext.Provider
        value={{
            searchTxt,
            setSearchTxt
        }}
    >
        <div className={styles.container}>
        	<MyHeader />

        	<div className={styles.content}>
        		<MyMenu />
        		<MyList content={markdownContent} />
        	</div>

        	<Myfooter myWebsite={myWebsite} />
        </div>
    </MyContext.Provider>
  )
}
