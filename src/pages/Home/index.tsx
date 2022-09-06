import { ShoppingCart } from 'phosphor-react';
import landingImage from './../../assets/landingImage.png';
import { AdvantagesContainer, BulletpointContainer, HomeContainer, TitleContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <div>
                <TitleContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                </TitleContainer>
                <AdvantagesContainer>
                    <BulletpointContainer><ShoppingCart />Compra simples e segura</BulletpointContainer>
                    <BulletpointContainer></BulletpointContainer>
                    <BulletpointContainer></BulletpointContainer>
                    <BulletpointContainer></BulletpointContainer>
                </AdvantagesContainer>
            </div>
            <img src={landingImage} alt="" />
        </HomeContainer>
    );
}