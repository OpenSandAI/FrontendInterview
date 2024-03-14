import Image from "next/image";
// import { MDXProvider } from '@mdx-js/react'
import Button from "../../components/Button"
// import MDX from 'my-mdx-page/page.mdx'
import { MDXProvider } from '@mdx-js/react'

export default function Home() {
  const components = {
    button:Button
  }

  return (
    <>
      首页
      {/*<Button>按钮</Button>*/}
      {/*<MDXProvider components={components}>*/}
      {/*</MDXProvider>*/}
    </>
  );
}
