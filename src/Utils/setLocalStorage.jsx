export const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCart = [...cartItems, product];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
};

export const addToFavorites = (product) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some((item) => item.articule === product.articule);

    if (isFavorite) {
        const updatedFavorites = favorites.filter((item) => item.articule !== product.articule);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
        const updatedFavorites = [...favorites, product];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
};

export const removeFromFavorites = (productId) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.filter(item => item.articule !== productId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};

export const removeToCart = (productId) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCart = cartItems.filter(item => item.articule !== productId)
    localStorage.setItem("cartItems", JSON.stringify(updatedCart))
}