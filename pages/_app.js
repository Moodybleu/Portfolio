import '../styles/globals.css'
import Navbar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  return ( 
  <> 
    <NavBar />
    <Component {... pageProps}
  </>
  )
}

export default MyApp
