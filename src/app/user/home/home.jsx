import styles from '../../../styles/user/home/home.module.css'; // el import la funcion pricipal es traer una funcion de un archivo en concreto.
// styles o infoImage es solamente el nombre que le estoy dando a la funcion, es como si creara una variable y almacenara esa funcion
// from es para marcar la ubicacion del archivo
import infoImage from '../../../img/Screenshot 2024-06-29 205213.png' 
//aqui pueden ver una mescla de codigo js y html :o
const User = ()=>{ // se preguntaran porque se crea esta funcion?, es para despues llamar en otro archivo con los import.
    return(
    <div className={styles.containCenterInfoHigiene}>
        <img alt="ImageHigiene" className={styles.infoImage} src={infoImage} />
        <div className={styles.dataInfoImage}>
            <p >
                Higiene Personal: Lavarse las 
                manos con frecuencia y mantener una buena higiene bucal. 
            </p>
        </div>
    </div>
    )
}

export default User;