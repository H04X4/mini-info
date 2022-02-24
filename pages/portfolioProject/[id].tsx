import Header from "../../src/components/Header/header";
import s from '../../styles/PortfolioProject.module.css'
import {useRouter} from "next/router";
import {projectsData} from "../../src/constants/projectsData";
import Footer from "../../src/components/Footer/footer";
import Image from 'next/image'
import {MainContainer} from "../../src/containers/mainContainer";

const PortfolioProject = () => {
    const router = useRouter ()
    const {id} = router.query
    const project = projectsData.find ( project => project.id === +id! )
    return (
        <MainContainer title = {'Project'}>
            <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.projectInfo}>
                    <div className={s.projectName}>{project?.name}</div>
                    <div className={s.projectContainer}>
                        {project?.bigLogo ? <Image src={project?.bigLogo} alt={project.title}/> : ''}
                    </div>
                    <div className={s.date}>
                    <p className={s.projectDate}>Дата создания: {project?.projectDate}</p>
                    <p>Ссылка: &nbsp;
                        <a className={s.projectLink}>{project?.projectLink}</a>
                    </p>
                    </div>
                </div>
                <p className={s.discr}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            </div>
            <Footer/>
        </MainContainer>
    );
};

export default PortfolioProject;