import styles from '../../styles/Page.module.css';
import Rodape from '../../components/Footer';
import Topo from '../../components/Navbar';

function Profile({ objeto = {} }) {
    return (
        <div>

            <Topo/>
            
            <div className={styles.profile}>
            <title>Descrição do time escolhido</title>
            <h2>{objeto.nome}</h2>
            <p className={styles.descriobjeto}>{objeto.descricao}</p>
            <p>{objeto.usuario}</p>
            <button><a href="\objetos"> Voltar</a></button>
            </div>

            <Rodape/>

        </div>
    )
}

//Traz pra gente com o objeto que o usuario escolheu

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const objeto = await repo[context.params.nome];
    return {
        props: { objeto }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const objetos = await repo;
    const paths = objetos.map((objeto, index) => {
        return { params: { nome: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };

}
export default Profile;