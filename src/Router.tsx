import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function Router() {
    return (
        <Routes>
            <Route path="/ignite-v2-desafio-02" element={<DefaultLayout />}>
                <Route path="/ignite-v2-desafio-02" element={<Home />} />
                <Route path="/ignite-v2-desafio-02/checkout" element={<Checkout />} />
                <Route path="/ignite-v2-desafio-02/success" element={<Success />} />
            </Route>
        </Routes>
    );
}