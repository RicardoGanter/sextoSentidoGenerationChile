import styles from "./../../../styles/login.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import mailIcon from "../../../img/envelope-solid.svg"
import passwordIcon from "../../../img/lock-solid.svg"
import userIcon from "../../../img/usericon.svg"


const StepOneForm = ( {switchStep} ) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [switchStepp, setSwitchStep] = useState(false);

    return(
        <div className={styles.containLogin}> 
                <h1>¡Bienvenido de nuevo!</h1>
                    <div className={styles.stepsLine}>
                        <div className={styles.stepsLine2}></div>
                    </div>
                    <div className={styles.containInput}> 
                        <label htmlFor="name">Correo electronico</label>
                        <div>
                            <img alt="IconEmail" className={styles.iconInput} src={userIcon}/>
                            <input className={styles.input} placeholder="Correo electronico" type="text" value={name} id="name" name="name" onChange={req => setName(req.target.value)} required/>
                        </div>
                        
                    </div> 
                    <div className={styles.containInput}> 
                        <label htmlFor="email">Correo electronico</label>
                        <div>
                            <img alt="IconEmail" className={styles.iconInput} src={mailIcon}/>
                            <input className={styles.input} placeholder="Correo electronico" type="email" value={email} id="email" name="email" onChange={req => setEmail(req.target.value)} required/>
                        </div>
                        
                    </div> 
                    <div className={styles.containInput}  >
                        <label htmlFor="password">Contraseña</label>
                        <div>
                            <img alt="IconContraseña" className={styles.iconInput} src={passwordIcon}/>
                            <input className={styles.input} placeholder="Contraseña" type="password" id="password" name="password" value={password} onChange={req => setPassword(req.target.value)} required/>
                        </div>
                    </div>
                    <div className={styles.containInput}  >
                        <label htmlFor="Repite contraseña">Repetir contraseña</label>
                        <div>
                            <img alt="IconContraseña" className={styles.iconInput} src={passwordIcon}/>
                            <input className={styles.input} placeholder="Contraseña" type="password" id="Repite contraseña" name="password" value={password} onChange={req => setPassword(req.target.value)} required/>
                        </div>
                    </div>
                    {/* <Link to={'/user/home'}> */}
                        <button onClick={switchStep} className={styles.buttonEnter}>Siguiente</button>
                    {/* </Link> */}
                    <div className={styles.containLinks}>
                        <Link className={styles.enlaces} to="/login">¿Ya tienes una cuenta?  Iniciar sesión </Link> 
                    </div>
                </div> 
    )
}


export default StepOneForm;