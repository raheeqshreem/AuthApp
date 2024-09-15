import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";

export default function App() {
  return (
    <>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/*' element={<h2>page not found</h2>}/>


</Routes>
</>
  )
}
