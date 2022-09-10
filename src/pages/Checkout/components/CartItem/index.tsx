import { Minus, Plus, Trash } from "phosphor-react";
import { ItemFormat, useProductsCart } from "../../../../contexts/ProductsContext";
import { CartItemContainer } from "./styles";

interface CartItemProps {
    item: ItemFormat;
}

export function CartItem({ item }: CartItemProps) {
    const { updateItemInCart, deleteItemInCart } = useProductsCart();

    function handleSubtract() {
        if (item.quantity > 1)
            updateItemInCart(item.id, -1);
    }

    function handleAdd() {
        updateItemInCart(item.id, 1);
    }

    function handleDeleteItem() {
        deleteItemInCart(item.id);
    }

    return (
        <CartItemContainer>
            <img src={item.imageLink} alt="" />
            <div className="information">
                <h3>{item.title}</h3>
                <div className="buttons">
                    <div className="counter">
                        <Minus tabIndex={0} size={32} weight="bold" onClick={handleSubtract} />
                        <span>{item.quantity}</span>
                        <Plus tabIndex={0} size={32} weight="bold" onClick={handleAdd} />
                    </div>
                    <button onClick={handleDeleteItem} ><Trash size={32} /> REMOVER</button>
                </div>
            </div>
            <span>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
        </CartItemContainer>
    );
}