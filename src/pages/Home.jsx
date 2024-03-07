import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCart/ProductCart";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import Product from "../Utils/FetchProduct";
import { addToCart, addToFavorites, removeFromFavorites } from "../Utils/setLocalStorage";

export function Home(){
    const products = Product();

    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteProducts(favorites);
    }, []);

    const openModalWindow = (product) => {
        setSelectedProduct(product);
        setOpenModal(true);
    };

    const closeModalWindow = () => {
        setOpenModal(false);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        closeModalWindow();
    };

    const isProductFavorite = (productId) => {
        return favoriteProducts.some((product) => product.articule === productId);
    };

    const handleToggleToFavorite = (product) => {
        const isCurrentlyFavorite = isProductFavorite(product.articule);
        if (isCurrentlyFavorite) {
            removeFromFavorites(product.articule);
            setFavoriteProducts(favoriteProducts.filter((p) => p.articule !== product.articule));
        } else {
            addToFavorites(product);
            setFavoriteProducts([...favoriteProducts, product]);
        }
    };

    return (
        <div>
            <h1 style={{color: "#fff", fontFamily: "sans-serif"}}>Список продуктів</h1>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {products.map((product) => (
                    <ProductCard
                        key={product.articule}
                        productColor={product.color}
                        productImage={product.image}
                        productId={product.articule}
                        productName={product.name}
                        productPrice={product.price}
                    >
                        <Button
                            onClick={() => openModalWindow(product)}
                            className="modal-button"
                        >
                            Додати в кошик
                        </Button>
                        <p onClick={() => handleToggleToFavorite(product)} style={{ cursor: "pointer" }}>
                            {isProductFavorite(product.articule) ? "★" : "☆"}
                        </p>
                    </ProductCard>
                ))}
                {openModal && selectedProduct && (
                    <Modal 
                        onClose={closeModalWindow} 
                        productName={selectedProduct.name}
                        productTitle="ADD TO BASKET"
                    >
                        <Button
                            className="modal-button"
                            onClick={() => handleAddToCart(selectedProduct)}
                        >
                            Додати в кошик
                        </Button>
                    </Modal>
                )}
            </div>
        </div>
    )
}
