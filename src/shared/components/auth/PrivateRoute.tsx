import { PropsWithChildren } from "react";
import { selectAuthIsLogged, useAuth } from "../../../services/auth";
import { Navigate } from "react-router-dom";

export function PrivateRoute(props: PropsWithChildren) {
    const isLogged = useAuth(selectAuthIsLogged);

    return (
    <>
        { isLogged ? props.children : <Navigate to="/login" /> }
    </>
    )
}