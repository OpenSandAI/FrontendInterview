import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './home.module.css'

export default function MyList ({
	content
}) {
  return (
    <div className={styles.list}>
    	<ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
