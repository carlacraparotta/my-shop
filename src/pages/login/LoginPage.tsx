import { FormEvent, useEffect } from "react";
import useLogin from "./hooks/useLogin";
import { selectAuthError, selectAuthIsLogged, selectAuthLogin, useAuth } from "../../services/auth";
import { ServerError } from "../../shared";
import { useNavigate } from "react-router-dom";

export function LoginPage() {

    const navigate = useNavigate();
    const error = useAuth(selectAuthError);
    const isLogged = useAuth(selectAuthIsLogged);
    const login = useAuth(selectAuthLogin);
    const {formData, isValid, changeHandler} = useLogin();

    useEffect(() => {
      if (isLogged) {
        navigate("/cms")
      }
    }, [isLogged]);
    
    
    function doLogin(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        login(formData.username, formData.password);
    }

    return (
        <div className="page-sm">
            <h1 className="title">LOGIN</h1>

            {error && <ServerError />}

            <form onSubmit={doLogin} className="flex flex-col gap-3">
                
                <input 
                    type="text" 
                    placeholder="username"
                    name="username"
                    value={formData.username}
                    onChange={changeHandler}
                />

                <input 
                    type="password" 
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                />
                
                <button className="btn primary" type="submit" disabled={!isValid}>Accedi</button>
            </form>
        </div>
    )
}