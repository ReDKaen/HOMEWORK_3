import axios from "axios";
import { useEffect, useState } from "react";
const Product = () => {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/public/product.json');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return product;
};

export default Product;