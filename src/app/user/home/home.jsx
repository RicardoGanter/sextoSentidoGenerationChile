import styles from '../../../styles/user/home/home.module.css';
import infoImage from '../../../img/Screenshot 2024-06-29 205213.png' 
const User = ()=>{
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