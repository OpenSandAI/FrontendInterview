import moment from 'moment'
import styles from './home.module.css'

export default function Myfooter ({ myWebsite }) {
  return (
    <div className={styles.footer}>
      Copyright © {moment().format('YYYY')} {myWebsite} of next
      <a
        rel="noreferrer"
        href="https://beian.miit.gov.cn/"
        target="_blank"
      > 粤ICP备xxxx号-1
      </a>
    </div>
  )
}
