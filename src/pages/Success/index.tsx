import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Iustration from "../../assets/illustration.png";
import { useProductsCart } from "../../contexts/ProductsContext";
import { defaultTheme } from "../../styles/themes/default";
import { BulletpointContainer, InformationContainer, SuccessContainer } from "./styles";

export function Success() {
    const navigate = useNavigate();
    const { purchaseData } = useProductsCart();

    useEffect(() => {
        if (!purchaseData)
            navigate('/ignite-v2-desafio-02/');
    }, []);

    let payingMethod = '';
    switch (purchaseData?.selectedPaymentMethod) {
        case 'creditCard': payingMethod = 'Cartão de Crédito';
            break;
        case 'debitCard': payingMethod = 'Cartão de Débito';
            break;
        case 'money': payingMethod = 'Dinheiro';
            break;
    }

    return (
        <SuccessContainer>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <h2>Agora é só aguardar que logo o café chegará até você</h2>
                <InformationContainer>
                    <div className="borderwrap">
                        <BulletpointContainer backgroundColor={defaultTheme.purple}>
                            <MapPin weight="fill" />
                            <div>
                                <span>Entrega em <b>{purchaseData?.street}, {purchaseData?.addressNumber}{
                                    purchaseData?.addressComplement ?
                                        ' - ' + purchaseData.addressComplement :
                                        ''
                                }</b></span>
                                <span>{purchaseData?.addressRegion} - {purchaseData?.city}, {purchaseData?.state}</span>
                            </div>
                        </BulletpointContainer>
                        <BulletpointContainer backgroundColor={defaultTheme.yellow}>
                            <Timer weight="fill" />
                            <div>
                                <span>Previsão de entrega</span>
                                <b>20 min - 30 min </b>
                            </div>
                        </BulletpointContainer>
                        <BulletpointContainer backgroundColor={defaultTheme.yellowDark}>
                            <CurrencyDollar weight="fill" />
                            <div>
                                <span>Pagamento na entrega</span>
                                <b>{payingMethod}</b>
                            </div>
                        </BulletpointContainer>
                    </div>
                </InformationContainer>
            </div>
            <img src={Iustration} />
        </SuccessContainer>
    );
}