
import Navbar from "./Components/Navbar/Navbar.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import VirtualChangingRoom from "./Pages/virtualChangingRoom.jsx";
import TryCategory from "./Pages/TryCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footers/Footer.jsx";
import homepage_banner from "../src/Components/assets/Frontend_Assets/banner-homepage.png"
import sunglass_banner from "../src/Components/assets/Frontend_Assets/Banner-Sunglass.png"
import earrings_banner from "../src/Components/assets/Frontend_Assets/Banner-Earrings.png"
import necklace_banner from "../src/Components/assets/Frontend_Assets/Banner-Necklace.png"
import LoginSignup from "./Pages/LoginSignup.jsx";
import ProductListing from "./Product/product.jsx";
import Details from "./components/Cards/Details.jsx";


function App() {
  

  return(
  <>

    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<TryCategory banner={homepage_banner} category="virtualChangingRoom" />}/>

        <Route path="/Sunglasses" element={<TryCategory banner={sunglass_banner} category="Sunglasses" />}/>
        <Route path="/Earrings" element={<TryCategory banner={earrings_banner} category="Earrings"/>}/>
        <Route path="/Necklace" element={<TryCategory banner={necklace_banner} category="Necklace"/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element= {<Cart/>}/> 
        <Route path="/login" element={<LoginSignup/>}/>

      </Routes>
     
    
      <Footer/>
      </BrowserRouter>
      

    </div>
    </>)
    

  
}

export default App;
