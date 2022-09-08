import { MapPinLine } from "phosphor-react";
import { useForm } from "react-hook-form";
import { defaultTheme } from "../../../../styles/themes/default";
import { AddressContainer, Input } from "./styles";

export function AddressForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <AddressContainer>
            <b>Complete seu pedido</b>
            <div className="info">
                <MapPinLine color={defaultTheme.yellowDark} />
                <div>
                    <h2>Endereço de Entrega</h2>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </div>
            <div className="inputs">
                <Input
                    style={{ gridArea: "postalCode" }}
                    placeholder="CEP"
                    type="number"
                    {...register("postalCode")}
                />
                <Input
                    style={{ gridArea: "street" }}
                    placeholder="Rua"
                    type="text"
                    {...register("street")}
                />
                <Input
                    style={{ gridArea: "addressNumber" }}
                    placeholder="Número"
                    type="number"
                    {...register("addressNumber")}
                />
                <Input
                    style={{ gridArea: "addressComplement" }}
                    placeholder="Complemento"
                    type="number"
                    {...register("addressComplement")}
                />
                <Input
                    style={{ gridArea: "addressRegion" }}
                    placeholder="Bairro"
                    type="text"
                    {...register("addressRegion")}
                />
                <Input
                    style={{ gridArea: "city" }}
                    placeholder="Cidade"
                    type="text"
                    {...register("city")}
                />
                <Input
                    style={{ gridArea: "state" }}
                    placeholder="UF"
                    type="text"
                    {...register("state")}
                />
            </div>
        </AddressContainer>
    );
}