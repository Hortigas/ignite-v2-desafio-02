import { useProductsCart } from "../../../../contexts/ProductsContext";
import { CartItem } from "../CartItem";
import { CartListContainer } from "./styles";

export function CartList() {
    const { productsCartList } = useProductsCart();
    return (
        <CartListContainer>
            {productsCartList.map((item) =>
                <CartItem key={item.id} item={item} />
            )}
        </CartListContainer>
    );
}