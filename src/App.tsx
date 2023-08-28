import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { NavBar, PrivateRoute } from "./shared"
import { CMSPage, CMSOrdersPage, CMSProductsPage, CartPage, CheckoutPage, LoginPage, ShopPage, ThanksPage } from "./pages"


function App() {

  return (
    <BrowserRouter>
      <NavBar /> 
      <hr/>
      <div className="page">
        <Routes>
          <Route path="*" element={<Navigate to="shop" />} />

          <Route path="cms" element={<PrivateRoute><CMSPage /></PrivateRoute>}>
            <Route index element={<Navigate to="products" />} />
            <Route path="orders" element={<CMSOrdersPage />} />
            <Route path="products" element={<CMSProductsPage />} />
          </Route>

          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="thankyou" element={<ThanksPage />} />
          

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
