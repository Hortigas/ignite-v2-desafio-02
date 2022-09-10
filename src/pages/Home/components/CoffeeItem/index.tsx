import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { useProductsCart } from "../../../../contexts/ProductsContext";
import { CoffeeListItemContainer } from "./styles";

export interface CoffeeItemFormat {
    id: number,
    title: string,
    description: string,
    price: number,
    imageLink: string,
    tags: string[],
};

interface CoffeeListItemProps {
    coffee: CoffeeItemFormat;
}

export function CoffeeListItem({ coffee }: CoffeeListItemProps) {
    const [count, setCount] = useState(1);
    const { addItemWithQuantityToCard } = useProductsCart();

    function handleSubtract() {
        if (count > 1)
            setCount(count - 1);
    }

    function handleAdd() {
        setCount(count + 1);
    }

    function handleAddToCart() {
        addItemWithQuantityToCard(coffee, count);
    }

    return (
        <CoffeeListItemContainer>
            <img src={coffee.imageLink} alt="" />
            <div className="tags">
                {coffee.tags.map((tag) =>
                    <span key={tag} >{tag.toLocaleUpperCase()}</span>)}
            </div>
            <h1>{coffee.title}</h1>
            <h2>{coffee.description}</h2>
            <div className="buyArea">
                <span>{coffee.price}</span>
                <div className="counter">
                    <Minus tabIndex={0} size={38} weight="bold" onClick={handleSubtract} />
                    <span>{count}</span>
                    <Plus tabIndex={0} size={38} weight="bold" onClick={handleAdd} />
                </div>
                <ShoppingCart tabIndex={0} weight="fill" size={38} onClick={handleAddToCart} />
            </div>
        </CoffeeListItemContainer>
    );
}