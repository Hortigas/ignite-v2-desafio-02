import { Minus, Plus, Trash } from "phosphor-react";
import { ItemFormat, useProductsCart } from "../../../../contexts/ProductsContext";
import { CartItemContainer } from "./styles";

interface CartItemProps {
    item: ItemFormat;
}

export function CartItem({ item }: CartItemProps) {
    const { } = useProductsCart();

    function handleSubtract() {

    }

    function handleAdd() {

    }

    return (
        <CartItemContainer>
            <img src={item.imageLink} alt="" />
            <div className="information">
                <h3>{item.title}</h3>
                <div className="buttons">
                    <div className="counter">
                        <Minus size={32} weight="bold" onClick={handleSubtract} />
                        <span>{item.quantity}</span>
                        <Plus size={32} weight="bold" onClick={handleAdd} />
                    </div>
                    <button><Trash size={32} /> REMOVER</button>
                </div>
            </div>
            <span>R$ {item.price}</span>
        </CartItemContainer>
    );
}