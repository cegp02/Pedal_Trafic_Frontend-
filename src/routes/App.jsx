import { HashRouter, Route, Routes } from "react-router-dom"
import { MenuNav } from "../components/MenuNav"
import { ReservationDetalle } from "../pages/ReservationDetalle"
import { ReservationPage } from "../pages/ReservationPage"
import { ContactPage } from "../pages/ContactPage"
import { HomePage } from "../pages/HomePage"
import { NotFound } from "../pages/NotFound"

function App() {

  return (
    <div >
      <HashRouter>
     <MenuNav/> 
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contacto" element={<ContactPage/>}/>
      <Route path="/reservation" element={<ReservationPage/>}/> 
      <Route path="/reservation/:id" element={<ReservationDetalle/>}/> 
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     </HashRouter>     
    </div>
  )
}
export default App

