import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/contacts'
import Blog from '../pages/blog'
import Services from '../pages/services'


export default function Routter(){
    return(
        <>
   
      
        <Router>
            <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Service' element={<Services/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='Blog' element={<Blog/>}/>

            </Routes> 
            </Router>
        
        </>
    )

}