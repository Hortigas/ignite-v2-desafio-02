import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';
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
                    <BulletpointContainer backgroundColor={defaultTheme.yellowDark} ><ShoppingCart size="2rem" weight="fill" />Compra simples e segura</BulletpointContainer>
                    <BulletpointContainer backgroundColor={defaultTheme.baseText} ><Package size="2rem" weight="fill" /> Embalagem mantém o café intacto</BulletpointContainer>
                    <BulletpointContainer backgroundColor={defaultTheme.yellow} ><Timer size="2rem" weight="fill" />Entrega rápida e rastreada</BulletpointContainer>
                    <BulletpointContainer backgroundColor={defaultTheme.purple} ><Coffee size="2rem" weight="fill" /> O café chega fresquinho até você</BulletpointContainer>
                </AdvantagesContainer>
            </div>
            <img src={landingImage} alt="" />
        </HomeContainer>
    );
}