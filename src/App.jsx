import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoadScript } from '@react-google-maps/api'
import config from './utils/config'

import HomePage from './pages/HomePage'
import PoliticaPage from './pages/PoliticaPage/PoliticaPage'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/politica-privacidad' element={<PoliticaPage />} />
      </Routes>
      <LoadScript googleMapsApiKey={config.GOOGLE_API_KEY}></LoadScript>
    </Router>
  )
}

export default App
