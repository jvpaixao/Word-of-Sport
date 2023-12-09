import styles from '../styles/Components.module.css'
export default function Navbar() {
return (

    
// css do next é diferente por isso colocamos o className assim e dentro do css colocamos o nome da div e logo depois
// o className que vamos mexer
<div className={styles.navbar}>

     <a href='/'> Home </a>
     <h1 className={styles.titulo}>O seu site sobre os times de futebol</h1>
     <a className={styles.nomedosite}>WorldofSport</a>

</div>
)
}