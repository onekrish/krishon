import Navbar from './Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Footer'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import './Pages/Home.css'

function App() {
  return (	
		<div className=''>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
			{/* Menu bar inserting as global */}
			<Navbar/>
			<div className='mt-5'>
				<Routes>
					{/* Home page data */}
					<Route exact path="/" element={<Home/>}/>
					{/* Services page data  */}
					<Route path="/Services" element={<Services/>}/>
					{/* About page Data */}
					<Route path="/About" element={<About/>}/>
					{/* Contact page data */}
					<Route path="/Contact" element={<Contact/>}/>
					
				</Routes>
				{/* Footer inserting as global */}
				<Footer/>
			</div>
			</BrowserRouter>	
		</div>
  )
}

export default App
