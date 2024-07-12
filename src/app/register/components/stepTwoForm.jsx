import styles from "./../../../styles/login.module.css"
import { useState } from "react";
import { Link } from "react-router-dom"; 
import rulerIcon from "../../../img/ruler-vertical-solid.svg"
import clockIcon from "../../../img/clock-rotate-left-solid.svg" 
import virusIcon from "../../../img/virus.svg"
import bodyWeightIcon from "../../../img/body-weight-scales-icon.svg"

const StepTwoForm = ( {switchStep, widthStepsLine=false} ) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [switchStepp, setSwitchStep] = useState(false);
    useState(()=>{
        setTimeout(() => {
            setSwitchStep(widthStepsLine)
        }, 100);
    },[])

    return(
        <form  method="post"  className={styles.containLogin}> 
                <h1>¡Bienvenido de nuevo!</h1>
                    <div className={styles.stepsLine}>
                        <div style={ switchStepp ? { width : "100%"} : null} className={styles.stepsLine2}></div>
                    </div>
                    <div className={styles.containInput}> 
                        <label htmlFor="name">Edad</label>
                        <div>
                            <img alt="IconEmail" className={styles.iconInput} src={clockIcon}/>
                            <input className={styles.input} placeholder="Edad" type="text" value={name} id="name" name="name" onChange={req => setName(req.target.value)} required/>
                        </div>
                        
                    </div> 
                    <div className={styles.containInput}> 
                        <label htmlFor="email">Altura</label>
                        <div>
                            <img alt="IconEmail" className={styles.iconInput} src={rulerIcon}/>
                            <input className={styles.input} placeholder="Altura en cm" type="email" value={email} id="email" name="email" onChange={req => setEmail(req.target.value)} required/>
                        </div>
                        
                    </div> 
                    <div className={styles.containInput}  >
                        <label htmlFor="password">Peso</label>
                        <div>
                            <img alt="IconContraseña" className={styles.iconInput} src={bodyWeightIcon}/>
                            <input className={styles.input} placeholder="Peso en kg" type="password" id="password" name="password" value={password} onChange={req => setPassword(req.target.value)} required/>
                        </div>
                    </div>
                    <div className={styles.containInput}  >
                        <label htmlFor="Repite contraseña">Enfermedades cronicas</label>
                        <div>
                            <img alt="IconContraseña" className={styles.iconInput} src={virusIcon}/>
                            <input className={styles.input} placeholder="Seleccione enfermedades cronicas" type="password" id="Repite contraseña" name="password" value={password} onChange={req => setPassword(req.target.value)} required/>
                        </div>
                    </div>
                    {/* <Link to={'/user/home'}> */}
                        <button onClick={switchStep} className={styles.buttonEnter}>Registrarse</button>
                    {/* </Link> */}
                    <div className={styles.containLinks}>
                        <Link className={styles.enlaces} to="/login">¿Ya tienes una cuenta?  Iniciar sesión </Link> 
                    </div>
                </form> 
    )
}


export default StepTwoForm;