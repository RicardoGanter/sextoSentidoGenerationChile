import styles from "./../../../styles/login.module.css"
import { useState } from "react";
import { Link } from "react-router-dom"; 
import rulerIcon from "../../../img/ruler-vertical-solid.svg"
import clockIcon from "../../../img/clock-rotate-left-solid.svg" 
import virusIcon from "../../../img/virus.svg"
import bodyWeightIcon from "../../../img/body-weight-scales-icon.svg"
import { Fetch } from "../../../services/fetch"

const StepTwoForm = ( {stepVisibility} ) => {
    const [year, setYear] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [diseases, setDiseases] = useState();

    year && sessionStorage.setItem("year", year);
    height && sessionStorage.setItem("height", height);
    weight && sessionStorage.setItem("weight", weight);
    diseases && sessionStorage.setItem("diseases", diseases); 
    useState(()=>{
        const existsYear = sessionStorage.getItem('year');
        const existsHeight = sessionStorage.getItem('height') ;
        const existsWeight = sessionStorage.getItem('weight'); 
        const existsDiseases = sessionStorage.getItem('diseases'); 
        existsYear && setYear(existsYear)
        existsHeight && setHeight(existsHeight)
        existsWeight && setWeight(existsWeight);
        existsDiseases && setDiseases(existsDiseases);
    },[]) 
    

    return(
        <div style={ {visibility: !stepVisibility ?  "hidden" : "visible"} } >   
                    <div className={styles.containInput}> 
                        <label htmlFor="year">Edad</label>
                        <div>
                            <img alt="IconEmail" className={styles.iconInput} src={clockIcon}/>
                            <input className={styles.input} min="18" max="120" pattern="\d{1,4}" placeholder="Edad" type="number" value={year} id="year" name="year" onChange={req => setYear(req.target.value)} required/>
                        </div>
                        
                    </div> 
                    <div className={styles.containInput}> 
                        <label htmlFor="height">Altura</label>
                        <div>
                            <img alt="IconEmail" className={styles.iconInput} src={rulerIcon}/>
                            <input className={styles.input} min="100" max="250" maxlength="4" placeholder="Altura en cm" type="number" value={height} id="height" name="height" onChange={req => setHeight(req.target.value)} required/>
                        </div> 
                    </div> 
                    <div className={styles.containInput}  >
                        <label htmlFor="weight">Peso</label>
                        <div>
                            <img alt="IconContraseña" className={styles.iconInput} src={bodyWeightIcon}/>
                            <input className={styles.input} placeholder="Peso en kg" min="30" max="700" type="number" id="weight" name="weight" value={weight} onChange={req => setWeight(req.target.value)} required/>
                        </div>
                    </div>
                    <div className={styles.containInput}  >
                        <label htmlFor="diseases">Enfermedades cronicas</label>
                        <div>
                            <img alt="IconContraseña" className={styles.iconInput} src={virusIcon}/>
                            <input className={styles.input} placeholder="Seleccione enfermedades cronicas" type="text" id="diseases" name="diseases" value={diseases} onChange={req => setDiseases(req.target.value)} required/>

                        </div>
                    </div> 
                </div> 
    )
}

export default StepTwoForm;