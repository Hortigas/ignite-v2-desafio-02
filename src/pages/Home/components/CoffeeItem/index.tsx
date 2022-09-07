import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
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

    function handleSubtract() {
        if (count > 1)
            setCount(count - 1);
    }

    function handleAdd() {
        setCount(count + 1);
    }

    return (
        <CoffeeListItemContainer>
            <img src={coffee.imageLink} alt="" />
            <div className="tags">
                {coffee.tags.map((tag) =>
                    <span>{tag.toLocaleUpperCase()}</span>)}
            </div>
            <h1>{coffee.title}</h1>
            <h2>{coffee.description}</h2>
            <div className="buyArea">
                <span>{coffee.price}</span>
                <div className="counter">
                    <Minus size={38} weight="bold" onClick={handleSubtract} />
                    <span>{count}</span>
                    <Plus size={38} weight="bold" onClick={handleAdd} />
                </div>
                <ShoppingCart weight="fill" size={38} />
            </div>
        </CoffeeListItemContainer>
    );
}