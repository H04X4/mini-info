import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {burgerContext} from "../src/context/burgerContext";
import {useState} from "react";

function MyApp ( {Component, pageProps}: AppProps ) {
    const [burgerIsOpen, setBurgerIsOpen] = useState<boolean> ( false )
    return (
        <burgerContext.Provider value={{burgerIsOpen, setBurgerIsOpen}}><Component {...pageProps} /></burgerContext.Provider>
    )
}

export default MyApp
