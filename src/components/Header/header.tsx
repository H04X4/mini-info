import Image from 'next/image'
import header from './header.module.css';
import catlense from '../assets/img-header/catlense.svg';
import Link from 'next/link'
import {Link as Reference} from 'react-scroll'
import React, {useContext} from "react";
import cn from 'classnames';
import {burgerContext} from "../../context/burgerContext";

const Header = () => {
    const {burgerIsOpen, setBurgerIsOpen} = useContext ( burgerContext )
    return (
        <div className={header.wrapper}>
            <header className={header.header}>
                <Link href='/'>
                    <a className={header.link}>
                        <Image src={catlense} alt='catlense'/>
                        <p>catlense</p>
                    </a>
                </Link>
                <ul className={header.header_title}>
                    <Link href='/portfolio'>
                        <li className={header.header_list}>Наши проекты</li>
                    </Link>
                    <Link href='/team'>
                        <li className={header.header_list}>Команда</li>
                    </Link>
                    <Reference to='contacts' smooth={true}>
                        <li className={header.header_list}>Контакты</li>
                    </Reference>
                </ul>
                <div className={burgerIsOpen ? cn ( header.burger, header.activeBurger ) : header.burger}
                     onClick={() => setBurgerIsOpen ( !burgerIsOpen )}>
                    <span/>
                    <span/>
                    <span/>
                </div>
                <input className={header.btn} onClick={() => window.location.href = 'tg://resolve?domain=catlense'}
                       type='submit' value='Написать в Telegram'/>
            </header>
        </div>
    )
}

export default Header