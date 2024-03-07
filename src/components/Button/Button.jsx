export default function Button({onClick, className, type, children}) {
    return(
            <div>
                <button
                    onClick={onClick}
                    className={className}
                    type={type}
                >
                    {children}
                </button>
            </div>
    )
}