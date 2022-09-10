import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { AddressForm } from './components/AddressForm';
import { CartItensForm } from './components/CartItensForm';
import { PaymentForm } from './components/PaymentForm';
import { CheckoutContainer } from './styles';

const PurchaseFormValidationSchema = zod.object({
    addressComplement: zod.string(),
    addressNumber: zod.string().min(1, 'Campo não pode ser vazio'),
    addressRegion: zod.string().min(1, 'Campo não pode ser vazio'),
    city: zod.string().min(1, 'Campo não pode ser vazio'),
    postalCode: zod.string().min(1, 'Campo não pode ser vazio').length(8, 'CEP inválido'),
    selectedPaymentMethod: zod.string().min(1, 'Campo não pode ser vazio'),
    state: zod.string().length(2, 'UF inválido'),
    street: zod.string().min(1, 'Campo não pode ser vazio'),
});

type PurchaseFormData = zod.infer<typeof PurchaseFormValidationSchema>;

export function Checkout() {
    const PurchaseForm = useForm<PurchaseFormData>({
        resolver: zodResolver(PurchaseFormValidationSchema),
        shouldFocusError: true,
    });
    const { handleSubmit } = PurchaseForm;


    function handleSubmitPurchaseRequest(data: PurchaseFormData) {
        console.log(data);
    }

    return (
        <CheckoutContainer onSubmit={handleSubmit(handleSubmitPurchaseRequest)} action="">
            <FormProvider {...PurchaseForm}>
                <div>
                    <AddressForm />
                    <PaymentForm />
                </div>
            </FormProvider>
            <CartItensForm />
        </CheckoutContainer>
    );
}
