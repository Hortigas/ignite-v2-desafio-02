import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { defaultTheme } from "../../../../styles/themes/default";
import { AddressContainer, Input } from "./styles";

export function AddressForm() {
    const { register, formState: { errors } } = useFormContext();


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
                <div style={{ gridArea: "postalCode" }}>
                    <Input
                        placeholder="CEP"
                        type="number"
                        {...register("postalCode", { required: true })}
                    />
                    <span>{(errors.postalCode?.message) as string || ""}</span>
                </div>
                <div style={{ gridArea: "street" }}>
                    <Input
                        placeholder="Rua"
                        type="text"
                        {...register("street", { required: true })}
                    />
                    <span>{(errors.street?.message) as string || ""}</span>
                </div>
                <div style={{ gridArea: "addressNumber" }}>
                    <Input
                        placeholder="Número"
                        type="number"
                        {...register("addressNumber", { required: true })}
                    />
                    <span>{(errors.addressNumber?.message) as string || ""}</span>
                </div>
                <div style={{ gridArea: "addressComplement" }}>
                    <Input
                        placeholder="Complemento"
                        type="number"
                        {...register("addressComplement", { required: true })}
                    />
                    <span>{(errors.addressComplement?.message) as string || ""}</span>

                </div>
                <div style={{ gridArea: "addressRegion" }}>
                    <Input
                        placeholder="Bairro"
                        type="text"
                        {...register("addressRegion", { required: true })}
                    />
                    <span>{(errors.addressRegion?.message) as string || ""}</span>

                </div>
                <div style={{ gridArea: "city" }}>
                    <Input
                        placeholder="Cidade"
                        type="text"
                        {...register("city", { required: true })}
                    />
                    <span>{(errors.city?.message) as string || ""}</span>

                </div>
                <div style={{ gridArea: "state" }}>
                    <Input
                        placeholder="UF"
                        type="text"
                        maxLength={2}
                        {...register("state", { required: true })}
                    />
                    <span>{(errors.state?.message) as string || ""}</span>

                </div>
            </div>
        </AddressContainer>
    );
}