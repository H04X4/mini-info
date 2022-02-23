import cn from "classnames";
import main from "../Main/main.module.css";
import Link from "next/link";
import {Link as Reference} from "react-scroll/modules";
import React, {useContext} from "react";
import {burgerContext} from "../../context/burgerContext";
import {useRouter} from "next/router";

const Burger = () => {
    const {burgerIsOpen} = useContext ( burgerContext )
    const Router = useRouter()
    return (
        <>
            <div className={burgerIsOpen ? cn ( main.burgerMenu, main.active ) : main.burgerMenu}>
                <ul>
                    <Link href='/portfolio' passHref>
                        <li className={main.burgerListItem} >Наши проекты</li>
                    </Link>
                    <Link href='/team' passHref>
                        <li className={main.burgerListItem}>Команда</li>
                    </Link>
                    <Reference to='contacts' smooth={true}>
                        <li onClick={() => Router.push('/') } className={main.burgerListItem} >Контакты</li>
                    </Reference>
                </ul>
            </div>
        </>
    );
};

export default Burger;
