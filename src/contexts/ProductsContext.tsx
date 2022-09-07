import { createContext, ReactNode, useState } from "react";

type ProductsContextData = {

};

interface ProductsProviderProps {
    children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextData);

export function ProductsProvider({ children }: ProductsProviderProps) {
    const [productsCartList, setProductsCartList] = useState([]);

    return (
        <ProductsContext.Provider value={{} as ProductsContextData}>
            {children}
        </ProductsContext.Provider>
    );
}