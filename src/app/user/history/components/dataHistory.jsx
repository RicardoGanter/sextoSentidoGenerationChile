import style from "../../../../styles/user/history/dataHistory.module.css"


const DataHistory = () =>{
    return(
        <div className={style.contain}>
            <div className={style.containCita}>
                <p>Cita: </p>
                <div className={style.green}></div>
            </div> 
            <p style={{"margin": "1rem 2rem"}}>Tipo: Medicina general</p>  
            <p style={{"margin": "1rem 2rem"}}>Fecha 27/07/2022 - 8:00 AM</p>  
            <button className={style.buttonVerMas}>Ver mas</button>
        </div>
    )
}

export default DataHistory;