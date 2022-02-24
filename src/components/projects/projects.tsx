import React from 'react';
import s from './projects.module.css'
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

import Footer from "../Footer/footer";
import {featureAnimation} from "../teamMember/teamMembers";
import {projectsData} from "../../constants/projectsData";

export const Projects = () => {
    return (
        
        <div className={s.container}>
            
            {
                projectsData.map ( ( elem, idx ) => (
                    <Link href={`/portfolioProject/${elem.id}`} key={idx}>
                        <a>
                            <motion.div className={s.project}
                                        custom={idx + 1} variants={featureAnimation}
                                        viewport={{once: true}}
                                        initial='hidden' animate='visible'>
                                <Image src={elem.image} alt={'projectImg'}/>
                                <div className={s.project_name}>{elem.name}</div>
                                <div className={s.project_title}>{elem.title}</div>
                                <div className={s.moreInf}>Подробнее</div>
                            </motion.div>
                        </a>
                    </Link>
                ) )
            }
            
        </div>
          
    );
};

