import Image from 'next/image';
import React, {Dispatch, SetStateAction} from "react";
import contact from './contact.module.css';
import telegram from '../assets/img-contact/telegram.svg'
import email from '../assets/img-contact/image 5.svg'
import phone from '../assets/img-contact/phone.svg'
import github from '../assets/img-contact/github.svg'
import discord from '../assets/img-contact/discord.svg'
import instagram from '../assets/img-contact/instagram.svg'
interface IContactProps {
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
}

const Contact = ( {setModalIsOpen}: IContactProps ) => {
    return (
        <div className={contact.wrapper} id="contacts">
            <div className={contact.connection}>
                <p>Свяжитесь с нами</p>
            </div>
            <div className={contact.types_of_communication}>
                <div className={contact.social_block}>
                    <Image className={contact.telegramimg} src={telegram}/>
                    <p className={contact.lable}>Telegram</p>
                    <p className={contact.communication}>@catlense</p>
                    <input className={contact.btn} type='submit'
                           onClick={() => window.location.href = 'tg://resolve?domain=catlense'}
                           value='Написать в Telegram'/>
                </div>
                <div className={contact.social_block}>
                    <div className={contact.emailimg}>
                        <Image src={email}/>
                    </div>
                    <p className={contact.lable}>E-mail</p>
                    <p className={contact.communication}>hello@catlense.ru</p>
                    <input className={contact.btn} type='submit'
                           onClick={() => window.open ( 'mailto:hello@catlense.ru' )} value='Написать на почту'/>
                </div>
                <div className={contact.social_block}>
                    <Image className={contact.phoneimg} src={phone}/>
                    <p className={contact.lable}>Обратный звонок</p>
                    <p className={contact.communication}>Закажите обратный звонок</p>
                    <input className={contact.btn} type='submit' value='Заказать' onClick={() => {
                        setModalIsOpen ( true )
                    }}/>
                </div>
            </div>
            <div className={contact.social}>
                <a href='//github.com/catlense-ru' className={contact.github}>
                    <Image className={contact.githubimg} src={github}/>
                    <p className={contact.contact_List}>GitHub</p>
                </a>
                <a href='https://discord.gg/kjAhaetBZ4' className={contact.discord}>
                    <Image className={contact.discordimg} src={discord}/>
                    <p className={contact.contact_List}>Discord</p>
                </a>
                <a href='//instagram.com/catlense.ru' className={contact.instagram}>
                    <Image className={contact.instagramimg} src={instagram}/>
                    <p className={contact.contact_List}>Instagram</p>
                </a>
            </div>
        </div>
    );
};


export default Contact