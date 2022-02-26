import React, {useState} from "react";
import Image from 'next/image'
import TeamMembers from "../teamMember/teamMembers";
import {Projects} from "../projects/projects";
import {BackcallForm} from "../forms/BackcallForm";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";
import main from './main.module.css';
import image from '../assets/img-main/image_left.svg';
import image_n from '../assets/img-main/image_right.svg';
import {MainContainer} from "../../containers/mainContainer";

const Main: React.FC = (): JSX.Element => {
    const buttons: string[] = ['Кто мы?', 'Наша команда', 'Наше портфолио']
    const [activeTab, setActiveTab] = useState<number> ( 0 );
    const [modalIsOpen, setModalIsOpen] = useState<boolean> ( false )
    return (
        <MainContainer title={'Main Page'}>
            <BackcallForm modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
            <div className={main.main_wrapper}>
                <div className={main.container}>
                    <div className={main.image}>
                        <div className={main.rightimg}>
                            <Image src={image} alt='image'/>
                        </div>
                        <p>Мы создадим сайт<br/>Вашей мечты</p>
                        <div className={main.leftimg}><Image src={image_n} alt='image'/></div>
                    </div>
                    &nbsp;
                    <div className={main.sub_title}>
                        <p>Если Вам нужен лендинг, сайт для бизнеса или иной<br/>масштабный проект, то смело обращайтесь
                            к нам.</p>
                        <input className={main.btn} type='submit' value='Связаться с нами'
                               onClick={() => {
                                   setModalIsOpen ( !modalIsOpen )
                                   document.body.style.overflow = 'hidden'
                               }}/>
                    </div>
                    <div className={main.about}>
                        <p className={main.about_me}>О нас</p>
                        <div className={main.info}>
                            {buttons.map ( ( buttonName, index ) =>
                                ( <input key={index}
                                         className={index === activeTab ? main.activeTabButton : main.tabButton}
                                         type={'submit'}
                                         value={buttonName}
                                         onClick={() => setActiveTab ( index )}
                                    />
                                ) )}
                        </div>
                        {activeTab == 0 ?
                            <div className={`${main.web_text} ${main.about_text}`}>
                                <p>Catlense - это веб-студия, состоящая из нескольких разработчиков, дизайнеров и
                                    менеджеров,
                                    которые горят своим делом и хотят сделать современный интернет максимально
                                    эстетичным и
                                    не
                                    только полезным для бизнеса, но и удобным для конечного потребителя</p>
                                <p>Наша цель - помочь Вам с реализацией Ваших идей, целей и планов по сайту. Мы идём на
                                    встречу
                                    по заранее неоговоренным моментам, при создании пользуемся современными
                                    технологиями,
                                    которые по итогу сделают Ваш сайт максимально приятным и быстрым для
                                    пользователей</p>
                            </div>
                            : ''}
                        {activeTab == 1 ?
                            <div className={main.web_text}>
                                <TeamMembers/>
                            </div>
                            : ''}
                        {activeTab == 2 ? <div>
                            <div className={main.web_text}>
                                <Projects/>
                            </div>
                        </div> : ''}
                    </div>
                </div>
            </div>
            <Contact setModalIsOpen = {setModalIsOpen} />
            <Footer/>

        </MainContainer>
    )
}

export default Main