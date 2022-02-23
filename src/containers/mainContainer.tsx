import Head from "next/head";
import Header from "../components/Header/header";
import React from "react";
import Burger from "../components/burger/burgerMenu";
interface IMainContainer{
    children : JSX.Element|JSX.Element[],
    title: string
}
export const MainContainer = ( {children , title}:IMainContainer ) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <>
                <Header/>
                <Burger/>
                {children}
            </>
        </>
    )
}
