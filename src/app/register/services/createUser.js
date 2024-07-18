import { Fetch } from "../../../services/fetch";

export const createUser = async ( )=>{ 
    const existsName = sessionStorage.getItem('name');
    const existsEmail = sessionStorage.getItem('email') ;
    const existsPassword = sessionStorage.getItem('password'); 
    const existsRepeatPassword = sessionStorage.getItem('repeatPassword');  
    const existsYear = sessionStorage.getItem('year');
    const existsHeight = sessionStorage.getItem('height') ;
    const existsWeight = sessionStorage.getItem('weight'); 
    const existsDiseases = sessionStorage.getItem('diseases'); 
    if(!existsEmail || !existsName || !existsPassword || !existsRepeatPassword
        || !existsYear || !existsHeight || !existsWeight || !existsDiseases
    ){
        return console.error("Faltan datos")
    } 
    const maxHeight = existsHeight.toString().length; 
    if(maxHeight != 3){ 
       return alert("Altura ingresada incorrecta")
    } 
    const result = await Fetch("http://localhost:8000/createUser", "POST",
        {
         age:existsYear,
         height:existsHeight,
         weight:existsWeight,
         chronicDiseases:existsDiseases,
         userName:existsName,
         email:existsEmail,
         password:existsPassword
        })

    if(result.status == 201){
        sessionStorage.clear(); 
    }
}
