/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Profile } from "./pages/Profile";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="w-full bg-white min-h-screen relative flex flex-col font-sans">
          <AnnouncementBar />
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  );
}
