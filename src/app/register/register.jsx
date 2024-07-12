import styles from "./../../styles/login.module.css"
import logoImg from "../../img/Logo1.png"
import logo2Img from "../../img/2.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Fetch } from "../../services/fetch"
import StepOneForm from "./components/stepOneForm"
import StepTwoForm from "./components/stepTwoForm";


const Register = ()=>{
    const [switchStepOne, setSwitchStepOne] = useState(true);
    const [switchStepTwo, setSwitchStepTwo] = useState(false);

    const StepOne = () =>{ 
        setSwitchStepOne(false)
        setSwitchStepTwo(true)
    }
    const StepTwo = () =>{ 
        setSwitchStepOne(true)
        setSwitchStepTwo(false)
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
                { switchStepOne && <StepOneForm switchStep={StepOne}/> }
                { switchStepTwo && <StepTwoForm switchStep={StepTwo} widthStepsLine={true}/> }
            <p className={styles.copyrightText}>
                Copyright © 2024 SextoSentido S.A.
                Todos los derechos reservados
            </p>
        </div>
    )
}

export default Register;