import { zodResolver } from '@hookform/resolvers/zod';
import { ShoppingCart } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as zod from 'zod';
import { useProductsCart } from '../../contexts/ProductsContext';
import { AddressForm } from './components/AddressForm';
import { CartItensForm } from './components/CartItensForm';
import { PaymentForm } from './components/PaymentForm';
import { CheckoutContainer, EmptyCartContainer } from './styles';

const PurchaseFormValidationSchema = zod.object({
    addressComplement: zod.string(),
    addressNumber: zod.string().min(1, 'Campo não pode ser vazio'),
    addressRegion: zod.string().min(1, 'Campo não pode ser vazio'),
    city: zod.string().min(1, 'Campo não pode ser vazio'),
    postalCode: zod.string().min(1, 'Campo não pode ser vazio').length(8, 'CEP inválido'),
    selectedPaymentMethod: zod.string(),
    state: zod.string().length(2, 'UF inválido'),
    street: zod.string().min(1, 'Campo não pode ser vazio'),
});

export type PurchaseFormData = zod.infer<typeof PurchaseFormValidationSchema>;

export function Checkout() {
    const { productsCartList, clearCart, updatePurchaseData } = useProductsCart();
    const PurchaseForm = useForm<PurchaseFormData>({
        resolver: zodResolver(PurchaseFormValidationSchema),
        shouldFocusError: true,
    });
    const navigate = useNavigate();

    const { handleSubmit } = PurchaseForm;

    function handleSubmitPurchaseRequest(data: PurchaseFormData) {
        updatePurchaseData(data);
        clearCart();
        navigate('/ignite-v2-desafio-02/success');
    }

    function handleOnInvalidPurchaseRequest(data: any) {
        if (!!data && !!data?.selectedPaymentMethod && data.selectedPaymentMethod.message === 'Required')
            toast.warning('Selecione um método de pagamento');
    }
    if (productsCartList.length > 0)
        return (
            <CheckoutContainer onSubmit={handleSubmit(handleSubmitPurchaseRequest, handleOnInvalidPurchaseRequest)} action="">
                <FormProvider {...PurchaseForm}>
                    <div>
                        <AddressForm />
                        <PaymentForm />
                    </div>
                </FormProvider>
                <CartItensForm />
            </CheckoutContainer>
        );
    else return (
        <EmptyCartContainer>
            <h1><ShoppingCart />Carrinho Vazio</h1>
        </EmptyCartContainer>);
}
