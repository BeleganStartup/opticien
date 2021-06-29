import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../src/components/NavigationBar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavigationBar/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
