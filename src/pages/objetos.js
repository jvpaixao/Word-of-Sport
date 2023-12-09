import React from 'react';
import Rodape from '../components/Footer';
import Topo from '../components/Navbar';
import styles from '../styles/Page.module.css';
import Link from 'next/link';

function Objetos({ objetos }) {

    return (
        <div>

            <Topo />
            <div className={styles.objeto}>
                <title>Times Cadastrados</title>
                <h1>Todos os times Cadastrados</h1>
                {objetos.map((objeto, index) => (
                    <Link href='/profile/[nome]' as={`/profile/${index}`}>
                        <div key={objeto.nome}> <p> {objeto.nome} </p> </div>
                    </Link>
                    

                ))}
            <button><a href="\"> Voltar</a></button>
            

                </div>
            <Rodape/>

        </div>
    )
}

//traz todos os dados da api

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const objetos = await repo;
    return {
        props: { objetos }
    }
})
export default Objetos;