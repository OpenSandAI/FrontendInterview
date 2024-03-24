'use client'
import Link from 'next/link'
import { container_left, link, active } from '../app/styles.module.css';
import { usePathname } from 'next/navigation'

const docRoutes = [
    {
        name: 'doc1',
        path: '/doc/doc1',
    },
    {
        name: 'doc2',
        path: '/doc/doc2',
    },
    {
        name: 'doc3',
        path: '/doc/doc3',
    },
    {
        name: 'doc4',
        path: '/doc/doc4',
    },
]
export default function () {
const pathname = usePathname()
    console.log(pathname)
    return <div className={container_left}>
        {
            docRoutes.map(docRoute => {
                console.log(pathname, docRoute.path)
                return <Link 
                    className={
                        `${link} ${pathname === docRoute.path ? active : ''}`
                    } 
                    href={docRoute.path} key={docRoute.name}>
                    {docRoute.name}
                </Link>
            })
        }
    </div>
}
  