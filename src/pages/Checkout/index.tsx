import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { MouseEvent, useState } from "react";
import { defaultTheme } from "../../styles/themes/default";
import { AddressForm } from "./components/AddressForm";
import { CartList } from "./components/CartList";
import { Button, CartItensContainer, CheckoutContainer, PaymentContainer } from "./styles";

export function Checkout() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

    function handleOnClickButtonPaymentMethor(event: MouseEvent) {
        setSelectedPaymentMethod(event.currentTarget.id);
    }

    return (
        <CheckoutContainer>
            <div>
                <AddressForm />
                <PaymentContainer>
                    <div className="info">
                        <CurrencyDollar color={defaultTheme.purple} />
                        <div>
                            <h2>Pagamento</h2>
                            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                        </div>
                    </div>
                    <div className="paymentMethods">
                        <Button
                            selected={selectedPaymentMethod === 'creditCard'}
                            type="button"
                            id="creditCard"
                            onClick={handleOnClickButtonPaymentMethor}
                        ><CreditCard />CARTÃO DE CRÉDITO</Button>
                        <Button
                            selected={selectedPaymentMethod === 'debitCard'}
                            type="button"
                            id="debitCard"
                            onClick={handleOnClickButtonPaymentMethor}
                        ><Bank />CARTÃO DE DÉBITO</Button>
                        <Button
                            selected={selectedPaymentMethod === 'money'}
                            type="button"
                            id="money"
                            onClick={handleOnClickButtonPaymentMethor}
                        ><Money />DINHEIRO</Button>
                    </div>
                </PaymentContainer>
            </div>
            <CartItensContainer>
                <b>Cafés selecionados</b>
                <CartList />
                <div className="subPrice">
                    <span>total de itens</span>
                    <span>R$ 29,70</span>
                </div>
                <div className="subPrice">
                    <span>Entrega</span>
                    <span>R$ 3,50</span>
                </div>
                <div className="totalPrice">
                    <span>Total</span>
                    <span>R$ 33,20</span>
                </div>
            </CartItensContainer>
        </CheckoutContainer>
    );
}