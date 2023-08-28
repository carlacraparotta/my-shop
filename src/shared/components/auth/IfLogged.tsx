import React, { PropsWithChildren } from 'react'
import { selectAuthIsLogged, useAuth } from '../../../services/auth'

interface IfLoggedProps {
    else?: React.ReactNode;
}

export function IfLogged(props: PropsWithChildren<IfLoggedProps>) {
    const isLogged = useAuth(selectAuthIsLogged)
  return (
    <>
        {isLogged ? props.children : props.else}
    </>
  )
}
