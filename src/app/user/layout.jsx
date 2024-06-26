import { Outlet } from "react-router-dom"
import styles from '../../styles/user/layoutHeader.module.css'
import homeIcon from '../../img/house-solid.svg'



const LayoutHeader = ()=>{
    return(
        <div>
            <div className={styles.header}> 
                <button className={styles.button}>Cerrar sesion</button>
            </div>
            <div className={styles.lateral}>
                {/* Left */}
                <div className={styles.containLeftOptions}> 
                    <div className={styles.contanOption}>
                        <p>Inicio</p>
                        <img src={homeIcon}/>
                    </div>
                    <div className={styles.contanOption}>
                        <p>Historial</p>
                        <img src={homeIcon}/>
                    </div>
                    <div className={styles.contanOption}>
                        <p>Agendar hora</p>
                        <img src={homeIcon}/>
                    </div>
                    <div className={styles.contanOption}>
                        <p>Medicamentos</p>
                        <img src={homeIcon}/>
                    </div>
                    <div className={styles.contanOption}>
                        <p>Alimentos</p>
                        <img src={homeIcon}/>
                    </div>
                    <div className={styles.contanOption}>
                        <p>Guia de salud</p>
                        <img src={homeIcon}/>
                    </div>
                </div>
                {/* Right*/}
                <div className={styles.containRigthInfoUser}> 
                     
                </div>
            </div>
            <Outlet/>
        </div>
    )
}


export default LayoutHeader;