import { Link } from "react-router-dom";

const Login = ()=>{
    
    return (
        <form action="submit_form.php" method="post" class="containLogin">
            <div class="containInput">
                <label for="nombre">Rut</label>
                <input placeholder="12.345.678-9" type="text" id="nombre" name="nombre" required/>
            </div> 
            <div class="containInput">
                <label for="password">Contraseña</label>
                <input  type="password" id="password" name="password" required/>
            </div>
            <div class="containLinks">
                <a>¿Has olvidado tu contraseña?</a>
                <a>Crear cuenta</a>
            </div>
            <Link to={'/user/'}><button type="Button" class="buttonEnter">Ingresar</button></Link>
        </form> 
    )
}

export default Login;