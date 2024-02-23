import './homepage.css'
import { Navigation } from "../../components/layout/Navbar";
import bell from "../../assets/icons/bell.png"
import dots from "../../assets/icons/dots.png"
import chairBackground from "../../assets/images/product-at-home.jpg"
import ProductCard from '../../components/productCard';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

 export const Home = () => {

    const user = useContext(UserContext);
    const [category, setCategory] = useState("All")

    const chooseCategory = (category:string) => {
        setCategory(category)
    }

    return (
        <>
            <div className="main-container">
                
                <div className="home-body">
                    <header className="home-header">
                        <div className="bubble"><img className="bubble-icon" src={dots} alt="menu-dots" /></div>
                        <div className="bubble right"><img className="bubble-icon" src={bell} alt="alert" /></div>
                        <span className="welcome-span">Welcome, <strong className ="strong-client-name">{user.userData?.name}!</strong></span>
                        <div className="input-wrapper">
                            <input type="search" className="input explorer" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </header>
                    <div className="banner">
                        <img className="sale-img" src={chairBackground} />
                        <div className="sale-banner-info">
                            <p className="collection-sale">Concept Collection</p>
                            <p className="sale-percentaje">50% off</p>
                            <button className="btn-sale">Buy Now</button>
                        </div>
                    </div>
                    <div>
                    <button onClick={() =>chooseCategory("All")} className="btn-categories">All</button>
                    <button onClick={() =>chooseCategory("Armchair")} className="btn-categories">Armchair</button>
                    <button onClick={() =>chooseCategory("Chair")} className="btn-categories">Chair</button>
                    <button onClick={() =>chooseCategory("Sofa")} className="btn-categories">Sofa</button>

                    </div>
                    <div className="products-container">
                        <ProductCard category={category} />

                    </div>
                </div>
                <Navigation/>
            </div>
        </>
    )
    }
    


