export const nextStep = (  
    setStepOneVisibility, 
    setStep, 
    setSwitchWidth, 
    setBackButtonVisibility,
    setStepTwoVisibility 
)=>{  
    const existsName = sessionStorage.getItem('name');
    const existsEmail = sessionStorage.getItem('email') ;
    const existsPassword = sessionStorage.getItem('password'); 
    const existsRepeatPassword = sessionStorage.getItem('repeatPassword');   
    if(!existsEmail || !existsName || !existsPassword || !existsRepeatPassword){
        return console.error("Faltan datos")
    }
    if(existsPassword != existsRepeatPassword){
        return console.error("las Contraseñas no coinciden,")
    }

    const regexName = /^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/;
    const resultRegexName = regexName.test(existsName);
    if(!resultRegexName){
        return console.error("Tu Nombre no cumple con las condiciones")
    }

    const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|genstudents)\.(com|cl|org)$/;
    const resultRegexEmail = regexEmail.test(existsEmail);
    if(!resultRegexEmail){
      return console.error("Tu Correo no cumple con las condiciones")
    }

    setStepOneVisibility(false); 
    setStep(2)
    setSwitchWidth(true)
    setBackButtonVisibility(true)
    setStepTwoVisibility(true)
}