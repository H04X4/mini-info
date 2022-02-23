import Maksim from "../components/assets/img-team/image 1.jpg";
import Vlad from "../components/assets/img-team/image 2.jpg";
import Daniil from "../components/assets/img-team/image 3.jpg";
import Valera from "../components/assets/img-team/image 4.jpg";
interface TeamMembers {
    img: StaticImageData
    name: string
    skills: string
    dscr: string
}

export const teamMembers: TeamMembers[] = [
    {img: Maksim, name: 'Воронин Максим', skills: 'Основатель • FullStack Developer', dscr: 'Собрал всю команду воедино, не умеет думать какое-то описание, откладывает чуть на подольше, пишет почти всё на Nest, React, Express, Node, PHP'},
    {img: Vlad, name: 'Зайцев Владислав', skills: 'Frontend Developer', dscr: 'Собрал всю команду воедино, не умеет думать какое-то описание, откладывает чуть на подольше, пишет почти всё на Nest, React, Express, Node, PHP'},
    {img: Daniil, name: 'Гадельшин Даниил', skills: 'FullStack Developer', dscr: 'Собрал всю команду воедино, не умеет думать какое-то описание, откладывает чуть на подольше, пишет почти всё на Nest, React, Express, Node, PHP'},
    {img: Valera, name: 'Караев Валерий', skills: 'Python Developer', dscr: 'Собрал всю команду воедино, не умеет думать какое-то описание, откладывает чуть на подольше, пишет почти всё на Nest, React, Express, Node, PHP'},
    {img: Valera, name: 'Ворков Фёдор', skills: "Верстальщик", dscr: 'Собрал всю команду воедино, не умеет думать какое-то описание, откладывает чуть на подольше, пишет почти всё на Nest, React, Express, Node, PHP'}
]