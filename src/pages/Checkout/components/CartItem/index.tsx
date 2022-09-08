import { ItemFormat, useProductsCart } from "../../../../contexts/ProductsContext";
import { CartItemContainer } from "./styles";

interface CartItemProps {
    item: ItemFormat;
}

export function CartItem({ item }: CartItemProps) {
    const { } = useProductsCart();
    return (
        <CartItemContainer>
            <img src={item.imageLink} alt="" />
            <span>{item.title}</span>
        </CartItemContainer>
    );
}