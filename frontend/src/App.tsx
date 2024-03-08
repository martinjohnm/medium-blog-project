import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Blog } from "./pages/Blog"

Route
Routes
BrowserRouter


function App() {
  

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/signin" element={<Signin></Signin>}></Route>
            <Route path="/blog/:id" element={<Blog></Blog>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
