import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, ContactPage, Navbar, Footer, DesktopPage, WebPage, MobilePage } from "../info/index"

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/desktop' element={<DesktopPage />} />
                <Route path='/web' element={<WebPage />} />
                <Route path='/mobile' element={<MobilePage />} />
                <Route path='/' element={<Navigate to='/home' />} />
            </Routes>
            <Footer />
        </>
    )
}

export default AppRouter