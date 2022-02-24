import {Dispatch, SetStateAction, useState} from 'react'

import style from './backcallform.module.css'

interface IFormProps {
    modalIsOpen: boolean
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
}

let token = '5224851216:AAFWr0LxaT6oq8MSkDwkgqlkIPIuOGjD6PU';
let chat_id = '-647350262';

export const BackcallForm = ( {modalIsOpen, setModalIsOpen}: IFormProps ) => {
    const [name, setName] = useState ( '' )
    const [phone, setPhone] = useState ( '' )
    const [quest, setQuest] = useState ( '' )
    const backcall = ( e: any ) => {
        e.preventDefault ()
        setModalIsOpen ( modalIsOpen => !modalIsOpen )
        document.body.style.overflow = ''
    }
    const sendMessage = () => {
        if (name.length > 2 && phone.length > 5) {
            fetch ( 'https://api.telegram.org/bot${config.notifier.token}/sendMessage?chat_id=${config.notifier.chat_id}&text=*Новая заявка catlense.ru*%0A%0A*Имя:*%20${name}%0A*Телефон:*%20${phone}%0A*Вопрос:*%20${quest}&parse_mode=Markdown' )
            alert ( 'Ваша заявка успешно отправлена!' )
        }
        setName ( '' )
        setPhone ( '' )
        setQuest ( '' )
    }

    return (
        <div className={style.cmd}>
            <div className={`${style.popupWrapper} ${modalIsOpen ? style.popupWrapperActive : ''}`}>
                <div className={style.container}>
                    <div className={style.close} onClick={( e ) => backcall ( e )}>&times;</div>
                    <h1 className={style.h1}>Заполните форму и мы вам перезвоним как можно скорее!</h1>
                    <input className={style.input} type="text" placeholder="Ваше имя"
                           onChange={( {target} ) => setName ( target.value )}
                           value={name}/>
                    <input className={style.input} type="phone" pattern="[0-9]*" placeholder="Ваш телефон"
                           onChange={( {target} ) => setPhone ( target.value )} value={phone}/>
                    <input className={style.input} type="text" placeholder="Ваш вопрос"
                           onChange={( {target} ) => setQuest ( target.value )}
                           value={quest}/>
                    <button className={style.button} onClick={( e ) => {
                        sendMessage ()
                        backcall ( e )
                    }}>
                        Заказать звонок
                    </button>
                </div>
            </div>
        </div>
    )
}