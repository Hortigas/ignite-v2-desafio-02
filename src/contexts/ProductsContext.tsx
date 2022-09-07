import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

interface ProductsProviderProps {
    children: ReactNode;
}

type ProductsContextType = {
    productsCartList: ItemFormat[];
    addItemWithQuantityToCard: (item: ItemFormat, quantity: number) => void;
};

interface ItemFormat {
    id: number,
    title: string,
    description: string,
    price: number,
    imageLink: string,
    tags: string[],
    quantity: number;
};

const ProductsContext = createContext<ProductsContextType>({} as ProductsContextType);

export function ProductsProvider({ children }: ProductsProviderProps) {
    const [productsCartList, setProductsCartList] = useState<ItemFormat[]>([]);

    function addItemWithQuantityToCard(newItem: any, quantity: number) {
        const cartItem = { ...newItem, quantity } as ItemFormat;
        _hasItemInCart(newItem) ? _updateItemInCart(cartItem) : _addItemToCart(cartItem);
        toast.success(
            cartItem.quantity === 1 ?
                <span>{cartItem.quantity} <b>{cartItem.title}</b> foi adicionado ao carrinho</span> :
                <span>{cartItem.quantity} <b>{cartItem.title}</b> foram adicionados ao carrinho</span>
        );
    }

    function _hasItemInCart(newItem: ItemFormat) {
        return productsCartList.some((cartItem) => cartItem.id === newItem.id);
    }

    function _updateItemInCart(newItem: ItemFormat) {
        const updatedCartList = productsCartList.map((cartItem) => {
            if (cartItem.id === newItem.id)
                return { ...cartItem, quantity: cartItem.quantity + newItem.quantity };
            else
                return cartItem;

        });
        setProductsCartList(updatedCartList);
    }

    function _addItemToCart(newItem: ItemFormat) {
        setProductsCartList((state) => [...state, newItem]);
    }

    return (
        <ProductsContext.Provider value={{ productsCartList, addItemWithQuantityToCard }}>
            {children}
        </ProductsContext.Provider>
    );
}

export function useProductsCart(): ProductsContextType {
    return useContext(ProductsContext);
}