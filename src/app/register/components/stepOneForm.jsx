import styles from "./../../../styles/login.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import mailIcon from "../../../img/envelope-solid.svg"
import passwordIcon from "../../../img/lock-solid.svg"
import userIcon from "../../../img/usericon.svg"


const StepOneForm = ( {stepVisibility } ) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepearPassword] = useState();
    const [ocultOneStep, setOcultOneStep] = useState(false);
    name && sessionStorage.setItem("name", name);
    email && sessionStorage.setItem("email", email);
    password && sessionStorage.setItem("password", password);
    repeatPassword && sessionStorage.setItem("repeatPassword", repeatPassword);
    useState(()=>{
        const existsName = sessionStorage.getItem('name');
        const existsEmail = sessionStorage.getItem('email') ;
        const existsPassword = sessionStorage.getItem('password'); 
        const existsRepeatPassword = sessionStorage.getItem('repeatPassword'); 
        existsName && setName(existsName)
        existsEmail && setEmail(existsEmail)
        existsPassword && setPassword(existsPassword); 
        existsRepeatPassword && setRepearPassword(existsRepeatPassword) 
            

    },[]) 
    return(
        <div style={{ visibility: !stepVisibility ? "hidden" : "visible", position: "absolute", width: "100%" }}>  
            <div className={styles.containInput}> 
                <label htmlFor="name">Nombre completo</label>
                <div>
                    <img alt="IconEmail" className={styles.iconInput} src={userIcon}/>
                    <input className={styles.input} placeholder="Nombre completo" type="text" value={name} id="name" name="name" onChange={req => setName(req.target.value)} required/>
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
                    <input className={styles.input} placeholder="Contraseña" type="password" id="Repite contraseña" name="password" value={repeatPassword} onChange={req => setRepearPassword(req.target.value)} required/>
                </div>
            </div> 
        </div> 
    )
}


export default StepOneForm;