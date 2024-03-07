import React, { useState, useEffect } from "react";
import { removeFromFavorites } from "../Utils/setLocalStorage";
import ProductCard from "../components/ProductCart/ProductCart";

export function Favorite() {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteProducts(favorites);
    }, []);

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
        <>
            {favoriteProducts.map(item => (
                <ProductCard
                    key={item.articule}
                    productColor={item.color}
                    productId={item.articule}
                    productImage={item.image}
                    productName={item.name}
                    productPrice={item.price}
                >
                    <p onClick={() => handleToggleToFavorite(item)} style={{ cursor: "pointer" }}>
                            {isProductFavorite(item.articule) ? "★" : "☆"}
                    </p>
                </ProductCard>
            ))}
        </>
    )
}
