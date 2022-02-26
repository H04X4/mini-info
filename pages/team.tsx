import s from '../styles/TeamProfile.module.css'
import {teamMembers} from "../src/constants/teamMembers";
import Image from 'next/image'
import {MainContainer} from "../src/containers/mainContainer";

const TeamProfile = () => {
    return (
        <MainContainer title={'Team Members'}>
            <div className={s.container}>
                {teamMembers.map ( member => (
                    <div key={member.name} className={s.teamMemberContainer}>
                        <div className={s.memberImage}>
                            {member?.img ? <Image alt={member.name} src={member.img}/> : ''}
                        </div>
                        <div className={s.memberInfo}>
                            <div className={s.memberName}>{member.name}</div>
                            <div className={s.memberSkills}>{member.skills}</div>
                            <div className={s.memberDscr}>{member.dscr}</div>
                        </div>
                    </div>
                ) )}
            </div>
        </MainContainer>
    );
};

export default TeamProfile;
