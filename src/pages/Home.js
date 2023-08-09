import NavBar from "../features/navbar/Navbar";
import Product from "../features/products/Product";

function Home() {
    return ( 
        <div>
            <NavBar>
                <Product></Product>
            </NavBar>
        </div>
     );
}

export default Home;