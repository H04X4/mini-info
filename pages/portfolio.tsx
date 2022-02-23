import {Projects} from "../src/components/projects/projects";
import React from "react";
import s from '../styles/Portfolio.module.css';
import Footer from "../src/components/Footer/footer";
import {MainContainer} from "../src/containers/mainContainer";
const Portfolio = () => {
    return (
        <MainContainer title={'Portfolio'}>
            <div className={s.title}>Портфолио</div>
            <div className={s.container}>
                <Projects/>
            </div>
            <Footer /> 
        </MainContainer>

        
    );
};

export default Portfolio;
