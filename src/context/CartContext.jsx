import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState ([])

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )

}

