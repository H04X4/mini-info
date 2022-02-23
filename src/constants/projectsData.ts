import Remvel from "../components/assets/img-projects/logo 1.svg";
import bigRemvel from '../components/assets/img-projects/bigLogo.svg'

interface IProject {
    image: StaticImageData,
    name: string,
    title: string,
    bigLogo: StaticImageData,
    id: number,
    projectDate: string,
    projectLink: string
}

export const projectsData: IProject[] = [{
    image: Remvel,
    name: 'Ремвелл',
    title: 'Сайт для компании, ремонтирующей локомотивные устройства безопасности',
    bigLogo: bigRemvel,
    id: 1,
    projectDate: 'октябрь 2021',
    projectLink: 'rem-well.ru'
},
    {
        image: Remvel,
        name: 'Ремвелл',
        title: 'Сайт для компании, ремонтирующей локомотивные устройства безопасности',
        bigLogo: bigRemvel,
        id: 2,
        projectDate: 'октябрь 2021',
        projectLink: 'rem-well.ru'
    }]