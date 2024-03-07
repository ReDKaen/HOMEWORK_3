import "./ModalStyle.scss"
export default function Modal({productName, children, onClose, productTitle}){
    return (
        <>
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal-wrapper">
                <span onClick={onClose} className="modal-close">&times;</span>
                <div>
                    <p className="product-title">{productTitle} {productName}</p>
                </div>
                <div>
                    <span className="modal-subtitle">Description for you product</span>
                </div>
                <div style={{display: "flex", gap: "30px"}}>
                    {children}
                </div>
            </div>
        </>
    )
}