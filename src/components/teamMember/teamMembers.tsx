import Image from "next/image";
import s from './teamMembers.module.css'
import {motion} from "framer-motion";
import {teamMembers} from "../../constants/teamMembers";

export const featureAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: ( custom: number ) => ( {
        y: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.15
        }
    } )
}
const TeamMembers = () => {
    return (
        <>
            <div className={s.container}>
                {teamMembers.map ( ( elem, idx ) => (
                    <motion.div key={elem.name + idx} className={s.member}
                                custom={idx + 1} variants={featureAnimation}
                                viewport={{once: true}}
                                initial='hidden' animate='visible'>
                        <Image src={elem.img} alt={'teamMember'}/>
                        <div className={s.name}>{elem.name}</div>
                        <div className={s.skills}>{elem.skills}</div>
                    </motion.div> ) )}
            </div>
        </>
    );
};

export default TeamMembers;
