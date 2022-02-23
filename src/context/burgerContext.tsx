import {createContext} from "react";

type burgerContext = {
    burgerIsOpen: boolean
    setBurgerIsOpen: ( b: boolean ) => void
}
export const burgerContext = createContext<burgerContext> ( {burgerIsOpen: false, setBurgerIsOpen: () => {} } )