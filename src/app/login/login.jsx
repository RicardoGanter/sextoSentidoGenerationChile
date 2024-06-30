import { Link } from "react-router-dom";

const Login = ()=>{
    
    return (
        <form action="submit_form.php" method="post" className={"containLogin"}>
            <div className={"containInput"}>
                <label htmlFor="nombre">Rut</label>
                <input placeholder="12.345.678-9" type="text" id="nombre" name="nombre" required/>
            </div> 
            <div className={"containInput"}  >
                <label htmlFor="password">Contraseña</label>
                <input  type="password" id="password" name="password" required/>
            </div>
            <div className={"containLinks"}>
                <a href="k">¿Has olvidado tu contraseña?</a>
                <a href="k">Crear cuenta</a>
            </div>
            <Link to={'/user/home'}>
                <button type="Button" className={"buttonEnter"}>Ingresar</button>
            </Link>
        </form> 
    )
}

export default Login;