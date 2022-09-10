import { useProductsCart } from "../../../../contexts/ProductsContext";
import { CartList } from "../CartList";
import { CartItensContainer } from "./styles";

export function CartItensForm() {
    const { productsCartList } = useProductsCart();

    const deliveryFixedPrice = 3.50;
    const totalItens = productsCartList.reduce((previousValue, item) => previousValue + item.quantity, 0);
    const totalItensPrice = productsCartList.reduce((previousValue, item) => previousValue + (item.quantity * item.price), 0);
    const totalPrice = totalItensPrice + deliveryFixedPrice;

    return (
        <CartItensContainer>
            <b>Cafés selecionados</b>
            <CartList />
            <div className="subPrice">
                <span>total de itens</span>
                <span>{totalItens}</span>
            </div>
            <div className="subPrice">
                <span>Entrega</span>
                <span>R$ {deliveryFixedPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="totalPrice">
                <span>Total</span>
                <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <button type="submit">CONFIRMAR PEDIDO</button>
        </CartItensContainer>
    );
}