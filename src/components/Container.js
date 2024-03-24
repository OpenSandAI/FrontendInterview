import Menu from './Menu';
import { container } from '../app/styles.module.css';

export default function ({children}) {
    return <div className={container}>
        <Menu></Menu>
        {children}
    </div>
}
  