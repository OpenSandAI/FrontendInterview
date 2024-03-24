import Footer from '../../components/Footer';
import { container_right, doc_view } from '../styles.module.css';

export default function ({children}) {
    return <div className={container_right}>
        <div className={doc_view}>
            {children}
        </div>
        <Footer></Footer>
    </div>
}
  