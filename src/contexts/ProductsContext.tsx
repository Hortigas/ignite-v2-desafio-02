import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PurchaseFormData } from '../pages/Checkout';

interface ProductsProviderProps {
    children: ReactNode;
}

type ProductsContextType = {
    productsCartList: ItemFormat[];
    purchaseData: PurchaseFormData | undefined;
    addItemWithQuantityToCard: (item: any, quantity: number) => void;
    updateItemInCart: (itemId: number, quantity: number) => void;
    deleteItemInCart: (itemId: number) => void;
    clearCart: () => void;
    updatePurchaseData: (data: PurchaseFormData) => void;
};

export interface ItemFormat {
    id: number;
    title: string;
    description: string;
    price: number;
    imageLink: string;
    tags: string[];
    quantity: number;
}

type ItemFormatWithoutQuantity = Omit<ItemFormat, 'quantity'>;

const ProductsContext = createContext<ProductsContextType>({} as ProductsContextType);

export function ProductsProvider({ children }: ProductsProviderProps) {
    const [productsCartList, setProductsCartList] = useState<ItemFormat[]>(loadCartListFromLocalStorage());
    const [purchaseData, setPurchaseData] = useState<PurchaseFormData>();

    useEffect(() => {
        const stateJSON = JSON.stringify(productsCartList);
        localStorage.setItem('@CoffeeDelivery:ProductsCartList-1.0.0', stateJSON);
    }, [productsCartList]);

    function loadCartListFromLocalStorage() {
        const storedStateAsJSON = localStorage.getItem('@CoffeeDelivery:ProductsCartList-1.0.0');
        if (!!storedStateAsJSON)
            return JSON.parse(storedStateAsJSON);
        return [];
    }

    function addItemWithQuantityToCard(newItem: ItemFormatWithoutQuantity, quantity: number) {
        const cartItem = { ...newItem, quantity } as ItemFormat;
        _hasItemInCart(cartItem) ? updateItemInCart(cartItem.id, cartItem.quantity) : _addItemToCart(cartItem);
        _notifyItemAddedToCart(cartItem);
    }

    function _hasItemInCart(newItem: ItemFormat) {
        return productsCartList.some((cartItem) => cartItem.id === newItem.id);
    }

    function updateItemInCart(itemId: number, quantity: number) {
        const updatedCartList = productsCartList.map((cartItem) => {
            if (cartItem.id === itemId) return { ...cartItem, quantity: cartItem.quantity + quantity };
            else return cartItem;
        });
        setProductsCartList(updatedCartList);
    }

    function _addItemToCart(newItem: ItemFormat) {
        setProductsCartList((state) => [...state, newItem]);
    }

    function _notifyItemAddedToCart(cartItem: ItemFormat) {
        toast.success(
            cartItem.quantity === 1 ? (
                <span>
                    {cartItem.quantity} <b>{cartItem.title}</b> foi adicionado ao carrinho
                </span>
            ) : (
                <span>
                    {cartItem.quantity} <b>{cartItem.title}</b> foram adicionados ao carrinho
                </span>
            )
        );
    }

    function deleteItemInCart(itemId: number) {
        const updatedCartList = productsCartList.filter((cartItem) => cartItem.id !== itemId);
        setProductsCartList(updatedCartList);
    }

    function clearCart() {
        setProductsCartList([]);
    }

    function updatePurchaseData(data: PurchaseFormData) {
        setPurchaseData(data);
    }

    return <ProductsContext.Provider value={{
        productsCartList,
        purchaseData,
        addItemWithQuantityToCard,
        updateItemInCart,
        deleteItemInCart,
        clearCart,
        updatePurchaseData
    }}>{children}</ProductsContext.Provider>;
}

export function useProductsCart(): ProductsContextType {
    return useContext(ProductsContext);
}
