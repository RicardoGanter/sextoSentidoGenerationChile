import styles from '../../../styles/user/history/history.module.css'
import DataHistory from './components/dataHistory';
import search from '../../../img/magnifying-glass-solid.svg'
import arrowDown from '../../../img/arrow-down-solid.svg'

const History = () => {
    return(
        <div className={styles.contain}>
            <h1>Historial</h1> 
            <div className={styles.search}>
                <img className={styles.searchIcon} src={search}/>
                <input placeholder='Buscar' className={styles.inputSearch} />
            </div> 
            <div className={styles.containHistory}>
                <div className={styles.filters}>
                    <div className={styles.filter} style={{"border-right": "2px solid rgba(255, 255, 255, 0.445)"}}>
                        <p>odenar por fecha</p>
                        <img className={styles.arrowDownImage} src={arrowDown}/>
                    </div>
                    <div className={styles.filter}> 
                        <p>odenar por fecha</p>
                        <img className={styles.arrowDownImage} src={arrowDown}/>
                    </div>
                </div>
                <div>
                    <DataHistory/>
                    <DataHistory/>
                    <DataHistory/>
                    <DataHistory/>
                    <DataHistory/>
                    <DataHistory/>
                </div>
            </div>
        </div>
    )
}

export default History;