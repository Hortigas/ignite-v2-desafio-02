import { useEffect, useState } from "react";
import { CoffeeItemFormat, CoffeeListItem } from "../CoffeeItem";
import { CoffeeListContainer } from "./styles";

export function CoffeeList() {
    const [coffeeList, setCoffeeList] = useState<CoffeeItemFormat[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://hortigas.github.io/coffeeDeliveryAPI/coffeeList.json');
            const data = await response.json();
            setCoffeeList(data as CoffeeItemFormat[]);
        };
        fetchData();
    }, []);

    return (
        <>
            <h2>Nossos cafés</h2>
            <CoffeeListContainer>
                {coffeeList.map((item) => <CoffeeListItem key={item.id} coffee={item} />)}
            </CoffeeListContainer>
        </>
    );
}