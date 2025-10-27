import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/> }>
            <Route index element={<HomePage /> }/>
            <Route path="/ProductsPage" element={<ProductsPage/> }/>
            <Route Path="/ProductsPage/:id" element={<SingleProductPage/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
