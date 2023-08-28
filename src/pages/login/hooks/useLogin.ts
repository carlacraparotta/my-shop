import React, { ChangeEvent, useState } from 'react'

export default function useLogin() {
    const [formData, setFormData] = useState({username: "", password: ""});

    function changeHandler(e: ChangeEvent<HTMLInputElement>): void {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setFormData(s => ({...s, [name]: value}))
    }

    const isValid = formData.username.length && formData.password.length;

    return {
        formData,
        isValid,
        changeHandler
    }
}
