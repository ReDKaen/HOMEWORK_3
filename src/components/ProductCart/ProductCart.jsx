import "./ProductCartStyle.scss"
export default function ProductCard({ productName, productColor, productPrice, productImage, productId, children}){
    return (
            <div key={productId} className="product-card">
                <img src={productImage} alt={productName} className="product-image"/>
                <h2 className="product-name">{productName}</h2>
                <div>
                    <p className="product-color">Колір: {productColor}</p>
                    <p className="product-price">Ціна: {productPrice}</p>
                </div>
                <div className="functional-wrapper">
                    {children}
                </div>
            </div>
    )
}
