import React from "react"
import styles from '../../styles/user/layoutHeader.module.css'
import homeIcon from '../../img/house-solid.svg' 
import fileIcon from '../../img/file-pen-solid.svg'
import newsPapperIcon from '../../img/newspaper-solid.svg'
// import messageIcon from '../../img/envelope-solid.svg'
import medicineIcon from '../../img/notes-medical-solid.svg'
import foodIcon from '../../img/utensils-solid.svg'
import pillsIcon from '../../img/pills-solid.svg'
import { Outlet } from "react-router-dom"
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
                        <img alt="Home Icon" src={homeIcon}/>
                    </div>
                    <div className={styles.contanOption}>
                        <p>Historial</p>
                        <img alt="History Icon" src={newsPapperIcon}/>
                    </div>
                    <div className={styles.contanOption}>
                        <p>Agendar hora</p>
                        <img alt="Schedule time Icon" src={fileIcon}/>
                    </div>
                    <div className={styles.contanOption}>
                        <p>Medicamentos</p>
                        <img alt="Medicines Icon" src={pillsIcon}/>
                    </div>
                    <div className={styles.contanOption}>
                        <p>Alimentos</p>
                        <img alt="Food Icon" src={foodIcon}/>
                    </div>
                    <div className={styles.contanOption}>
                        <p>Guia de salud</p>
                        <img alt="health guide" src={medicineIcon}/>
                    </div>
                </div>
                {/* Center */} 
                <Outlet/> 
                {/* Right*/}
                <div className={styles.containRigthInfoUser}> 
                    <div className={styles.subContainInfoUser}>
                        <p>Nombre: Ricardo Rosales</p>
                        <p>Run: 20100326-1</p>
                        <p>Edad: 25</p>
                        <p>Numero de documento: 518.774.090</p>
                        <a className={styles.enlaceVerMas} href="datos">Ver mas datos</a>
                    </div>
                    <div className={styles.subContainInfoUser}>
                        <p>Proxima cita:</p>
                        <p>Tipo: Medicina general</p>
                        <p>Fecha 27/07/2024 - 14:00 PM</p> 
                        <a className={styles.enlaceVerMas} href="datos">Ver mas citas programadas</a>
                    </div>
                    <div className={styles.subContainInfoUser}> 
                        <p>Medicamentos pendientes: 5</p> 
                        <a className={styles.enlaceVerMas} href="datos">Ver mas medicamentos programados</a>
                    </div>
                </div>
            </div> 
        </div>
    )
}


export default LayoutHeader;