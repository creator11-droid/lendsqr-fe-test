import Home from "./components/Home/Home"
import User from "./components/User/User"
import Signin from "./components/signin/Signin"
import { Route, Routes } from "react-router"
import Error from "./Error"
import Pagination from "./components/Pagination/Pagination"

function App() {


  return (
    <>
     <div className="Wrapper">
      <Routes>
      
    <Route path="/" element={<Signin/>}/>
  
   <Route element={<Home/>}>
   <Route path="home" element={<User />} />
   <Route path="user" element={<Pagination />} />
   <Route path="*" element={<Error/>}/>
   </Route>
    

  
      </Routes>
     
     </div>
    </>
  )
}

export default App
