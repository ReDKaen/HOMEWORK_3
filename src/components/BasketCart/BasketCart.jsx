import "./BasketCartStyle.scss"
export default function BasketCart({ productName, productColor, productPrice, productImage, productId, children}){
    return(
        <>
            <div key={productId} className="busket-cart">
                <img src={productImage} alt={productName} className="basket-product-image"/>
                <div>
                    <h2 className="basket-product-name">{productName}</h2>
                    <div>
                        <p className="basket-product-color">Колір: {productColor}</p>
                        <p className="basket-product-price">Ціна: {productPrice}</p>
                    </div>
                </div>
                <div className="functional-wrapper">
                    {children}
                </div>
            </div>
        </>
    )
}