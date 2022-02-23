import {Projects} from "../src/components/projects/projects";
import React from "react";
import s from '../styles/Portfolio.module.css'
import {MainContainer} from "../src/containers/mainContainer";
const Portfolio = () => {
    return (
        <MainContainer title={'Portfolio'}>
            <div className={s.title}>Портфолио</div>
            <div className={s.container}>
                <Projects/>
            </div>
        </MainContainer>
    );
};

export default Portfolio;
