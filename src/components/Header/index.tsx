import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import logo from "./../../assets/logo-coffee-delivery.svg";
import { ButtonCardContainer, ButtonLocationContainer, HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <nav>
                <ButtonLocationContainer href="#">
                    <MapPin size="22" weight="fill" color={defaultTheme.purple} className="pinIcon" />
                    Belo Horizonte
                </ButtonLocationContainer>
                <ButtonCardContainer href="#">
                    <ShoppingCartSimple size="22" weight="fill" color={defaultTheme.yellowDark} />
                </ButtonCardContainer>
            </nav>
        </HeaderContainer>
    );
}