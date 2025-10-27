import Outlet from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

const MainLayout = () => {
  return (
    <>
    <main>
        <Header/>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </main>
    </>
  )
}

export default MainLayout
