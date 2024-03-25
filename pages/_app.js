import App from 'next/app'
import '../css/normalize.css'
import '../css/global.css'

 
export default function MyApp({ Component, pageProps, example }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
 
MyApp.getInitialProps = async (context) => {
  console.log(context,'context')
  const ctx = await App.getInitialProps(context)
  console.log(ctx,'ctx')
  return { ...ctx, example: 'data' }
}