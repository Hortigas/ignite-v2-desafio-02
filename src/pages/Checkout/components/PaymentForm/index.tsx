import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { MouseEvent, useState } from 'react';
import { useFormContext } from "react-hook-form";
import { defaultTheme } from '../../../../styles/themes/default';
import { Button, PaymentContainer } from './styles';

export function PaymentForm() {
    const { register, setValue } = useFormContext();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');

    register("selectedPaymentMethod");

    function handleOnClickButtonPaymentMethor(event: MouseEvent) {
        const selected = event.currentTarget.id;
        setSelectedPaymentMethod(selected);
        setValue("selectedPaymentMethod", selected);
    }

    return (
        <PaymentContainer>
            <div className="info">
                <CurrencyDollar color={defaultTheme.purple} />
                <div>
                    <h2>Pagamento</h2>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
            </div>
            <div className="paymentMethods">
                <Button selected={selectedPaymentMethod === 'creditCard'} type="button" id="creditCard" onClick={handleOnClickButtonPaymentMethor}>
                    <CreditCard />
                    CARTÃO DE CRÉDITO
                </Button>
                <Button selected={selectedPaymentMethod === 'debitCard'} type="button" id="debitCard" onClick={handleOnClickButtonPaymentMethor}>
                    <Bank />
                    CARTÃO DE DÉBITO
                </Button>
                <Button selected={selectedPaymentMethod === 'money'} type="button" id="money" onClick={handleOnClickButtonPaymentMethor}>
                    <Money />
                    DINHEIRO
                </Button>
            </div>
        </PaymentContainer>
    );
}
