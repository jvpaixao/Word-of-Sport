import Head from 'next/head';
import Rodape from '../components/Footer';
import Topo from '../components/Navbar';
import styles from '../styles/Page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title> WorldofSport </title>
      </Head>

      <Topo />

      <div className={styles.home}>
          <h1 >Sobre o site:</h1>
          <p>Antes de tudo precisamos saber sbre o que é a autodescrição...Em linhas gerais, a audiodescrição traduz imagens em palavras para que pessoas cegas e com baixa visão possam ter acesso ao seu conteúdo (Franco e Silva, 2010, p. 23). O recurso também amplia o entendimento de pessoas com deficiência intelectual, com TDAH, autistas, disléxicos, idosos e outras pessoas sem deficiência (Motta, 2016, p. 2).</p>
          <p >Com isso, esse site foi criado principalmente para o público com deficiência visual, mas pode beneficiar outros públicos com outras deficiências e idosos. Ele é normalmente utilizado em produtos e serviços culturais, educacionais e de entretenimento, através da disponibilidade das descrições de diversas maneiras, permitindo um acesso mais amplo e completando uma deficiência que esses produtos e serviços tinham para contemplar a todos.

A disponibilidade do recurso pode ser feita mixada ao áudio original em filmes, distribuída em fones receptores em teatros, acessada através de texto pelos softwares leitores de tela em livros digitais, disponibilizada em audioguias, entre outros.</p>
      <button><a href="\objetos">Todos os times cadastrados</a></button>
      </div>

      <Rodape />
    </div>
  )
}