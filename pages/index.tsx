import type {NextPage} from 'next'
import Main from "../src/components/Main/main";
// import {BackcallForm} from "../src/components/forms/BackcallForm";

// import React, {useContext, useState} from "react";

// чтобы хедер был тоже зетемнен надо как-то закинуть модалку на всех элементы
const Index: NextPage = () => {
    // const [modalIsOpen, setModalIsOpen] = useState<boolean> ( false )
    return (
       
        //{/* <BackcallForm modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/> */}
        <Main/>
       
    )
}

export default Index
