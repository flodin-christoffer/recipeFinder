import { Route, Routes } from "react-router"
import Sidebar  from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import FavoritesPage from "./pages/FavoritesPage"

function App() {

  return (
    <div className="flex">
   <Sidebar />
   <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/favorites" element={<FavoritesPage />}></Route>
   </Routes>
    </div>
  )
}

export default App
