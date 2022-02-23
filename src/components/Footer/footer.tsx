import type { NextPage } from 'next';
import Image from 'next/image'
import footer from './footer.module.css';
import Link from 'next/link';

import foot from '../assets/img-footer/logotype.svg'
const Footer: NextPage = () => {
  return (
    <div className={footer.wrapper}>
        <div className={footer.footer}>
            <Image src={foot}/>
            &nbsp;
            <p>catlense.ru</p>
            &nbsp;
            <p className={footer.inn}>ИНН 551904474516 </p>
            <p className={footer.inn}>Воронин Максим Евгеньевич</p>
            &nbsp;
        </div>
    </div>
  );
};

export default Footer
