import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemListContainer } from "./components/Item/ItemListContainer"
import { Navbar } from "./components/Header/Navbar"
import "./style/style.scss"
import { Home } from "./components/Homee/Home"
import { ItemDetailContainer } from "./components/Item/ItemDetailContainer"
import { ItemFilters } from "./components/Item/ItemFilters"
import { NotFound } from "./components/NotFound/NotFound"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"

function App() {

  return (
    <div>



      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemListContainer />} />
          <Route path="/detail/:itemid" element={<ItemDetailContainer />} />
          <Route path="/category/:itemCategory" element={<ItemFilters />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

      </BrowserRouter>


    </div>
  )
}

export default App
