import Head from "next/head";
import Header from "../components/Header/header";
import React, {useContext, useEffect, useRef} from "react";
import Burger from "../components/burger/burgerMenu";
import {burgerContext} from "../context/burgerContext";

interface IMainContainer {
    children: JSX.Element | JSX.Element[],
    title: string
}

export const MainContainer = ( {children, title}: IMainContainer ) => {
    const {burgerIsOpen, setBurgerIsOpen} = useContext ( burgerContext )
    const ref = useRef ()
    const headerRef = useRef ()
    useEffect ( () => {
        const checkIfClickedOutside = (e: any) => {
            if (!ref.current?.contains ( e.target ) && !headerRef.current?.contains ( e.target )) {
                setBurgerIsOpen ( false )
            }
        }
        document.addEventListener ( "mousedown", checkIfClickedOutside )
        return () => {
            document.removeEventListener ( "mousedown", checkIfClickedOutside )
        }
    }, [burgerIsOpen] )
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <>
                <Header innerRef={headerRef}/>
                <Burger innerRef={ref}/>
                {children}
            </>
        </>
    )
}
