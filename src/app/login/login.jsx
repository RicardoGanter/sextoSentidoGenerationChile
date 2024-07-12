import { Link } from "react-router-dom";
import styles from "./../../styles/login.module.css"
import logoImg from "../../img/Logo1.png"
import logo2Img from "../../img/2.png"
import mailIcon from "../../img/envelope-solid.svg"
import passwordIcon from "../../img/lock-solid.svg"
import { useState } from "react";
const Login = ()=>{
    const [email, setEmail] = useState() 
    const [password, setPassword] = useState() 
    function validarCorreo(email) { 
        const correctEmail = /^[a-zA-Z0-9._-]+@gmail\.com$/; 
        return correctEmail.test(email);
    }
    const logIn = (event) => { 
        event.preventDefault()
        if (validarCorreo(email)){
            console.log(email)
        }
        else{
            alert("Tiene que ingresar un correo con Gmail")
        }
    }
    return (
        <div className={styles.contain}>
            <div className={styles.containLogos}>
                <img alt="Logo" src={logoImg} width={350}/>
                <img alt="Logo" src={logo2Img} width={350}/>
                <p>
                    “Equilibra tu cuerpo, revitaliza tu vida”
                </p>
            </div>
            <div>
                
                <form onSubmit={logIn} method="post" className={styles.containLogin}>
                    <h1>¡Bienvenido de nuevo!</h1>
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
                    {/* <Link to={'/user/home'}> */}
                        <button type="submit"  className={styles.buttonEnter}>Iniciar sesión</button>
                    {/* </Link> */}
                    <div className={styles.containLinks}>
                        <Link className={styles.enlaces} href=""> ¿Eres un profesional? Iniciar sesión</Link>
                        <Link className={styles.enlaces} href="k">¿Has olvidado tu contraseña?</Link>
                        <Link className={styles.enlaces} to="/register">¿Todavía no tienes una cuenta? Regístrate</Link>
                    </div>
                        
                </form> 
            </div>
            <p className={styles.copyrightText}>
                Copyright © 2024 SextoSentido S.A.
                Todos los derechos reservados
            </p>
        </div>
        
    )
}

export default Login;