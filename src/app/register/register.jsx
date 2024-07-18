import styles from "./../../styles/login.module.css"
import logoImg from "../../img/Logo1.png"
import logo2Img from "../../img/2.png"
// import { Link } from "react-router-dom";
import { createUser } from "./services/createUser"; 
import { useState } from "react";
import { Link } from "react-router-dom";
import { nextStep } from "./utils/nextStep";
import StepOneForm from "./components/stepOneForm"
import StepTwoForm from "./components/stepTwoForm"; 
import arrowLeftIcon from "../../img/arrow-left-long-solid.svg"

const Register = ()=>{
    const [stepOneVisibility, setStepOneVisibility] = useState(true)
    const [stepTwoVisibility, setStepTwoVisibility] = useState(false)

    const [step,setStep] = useState(1)
    const [switchWidth, setSwitchWidth] = useState(false)
    const [backButtonVisibility, setBackButtonVisibility] = useState(false)

    const backStep = ()=>{
        setStepOneVisibility(true); 
        setStep(1)
        setSwitchWidth(false)
        setBackButtonVisibility(false)
        setStepTwoVisibility(false)
    }
    
    return(
        <div className={styles.contain}>
            <div className={styles.containLogos}>
                <img alt="Logo" src={logoImg} width={350}/>
                <img alt="Logo" src={logo2Img} width={350}/>
                <p>
                    “Equilibra tu cuerpo, revitaliza tu vida”
                </p>
            </div> 
            <div className={styles.containRegisters}>
                <h1>Registro de usuario</h1>  
                <div onClick={()=> backStep()} style={ !backButtonVisibility ? { visibility:"hidden" }: null} className={styles.backButton}>
                    <img src={arrowLeftIcon}/>
                    <div >Volver</div>
                </div>  
                <div className={styles.stepsLine}>
                    <div style={{ width: !switchWidth ? "50%" : "100%" }} className={styles.stepsLine2}></div>
                </div>
                <form className={styles.containLogin}>  
                    <StepOneForm widthStepsLine={true} stepVisibility={stepOneVisibility}/> 
                    <StepTwoForm widthStepsLine={true} stepVisibility={stepTwoVisibility}/> 
                </form>
                {
                    step == 2 ? 
                    <button onClick={()=>{createUser()}} className={styles.buttonEnter}>Registrarse</button>
                    : 
                    <button className={styles.buttonEnter} onClick={ ()=> nextStep(setStepOneVisibility, 
                        setStep,
                        setSwitchWidth,
                        setBackButtonVisibility,
                        setStepTwoVisibility) }>Siguiente</button> 
                }
                <div className={styles.containLinks}>
                        <Link className={styles.enlaces} to="/login">¿Ya tienes una cuenta?  Iniciar sesión </Link> 
                </div>
            </div>
            
            <p className={styles.copyrightText}>
                Copyright © 2024 SextoSentido S.A.
                Todos los derechos reservados
            </p>
        </div>
    )
}

export default Register;