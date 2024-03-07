import BasketCart from "../components/BasketCart/BasketCart";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import { removeToCart } from "../Utils/setLocalStorage";
import { useState } from "react";

export function Basket(){

    const basketProduct = JSON.parse(localStorage.getItem("cartItems")) || [];
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModalWindow = (product) => {
        setSelectedProduct(product);
        setOpenModal(true);
    };

    const closeModalWindow = () => {
        setOpenModal(false);
    };

    const removeFromBasket = (product) => {
        removeToCart(product.articule);
        closeModalWindow();
    };

    return(
        <div style={{display: "flex", flexDirection: "column", gap: "20px", marginTop: "30px"}}>
            {basketProduct.map((item, index) => (
                <div key={index}>
                    <BasketCart
                        productColor={item.color}
                        productPrice={item.price}
                        productImage={item.image}
                        productName={item.name}
                    >
                        <Button
                            className="delet-from-busket-button"
                            onClick={() => openModalWindow(item)}
                        >   
                            <span>&times;</span>
                        </Button>
                    </BasketCart>
                </div>
            ))}
            {openModal && (
                <Modal
                    productTitle="ВИДАЛИТИ"
                    onClose={closeModalWindow}
                    productName={selectedProduct.name}
                >
                    <Button
                        className="first-delete-button"
                        onClick={() => removeFromBasket(selectedProduct)}
                    >
                        ТАК ВИДАЛИТИ
                    </Button>
                    <Button
                        className="second-delete-button"
                        onClick={closeModalWindow}
                    >
                        НІ 
                    </Button>
                </Modal>
            )}
        </div>
    )
}
