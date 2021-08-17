import React, {Component, useState} from 'react'
import { usePostApi } from "../../utils/auth";

export default function Register (props) {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disError, setDisError] = useState('');
    const api = usePostApi;

    const onRegisterClick = async e => {
        /* eslint-disable no-console */
        e.preventDefault()
        const { data, error } = api("/auth/register", {
            displayName: displayName,
            email: email,
            password: password
        });

        if (!error) {
            props.loginClicked(e)
        } else {
            setDisError(error)
        }


        console.log(data)
    }

    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col p-6 md:max-w-lg gap-y-6">
                <h1 className="text-4xl font-bold text-center">
                    Create an account
                </h1>
                <label className="flex flex-col gap-y-2 text-xs">
                    Display Name
                    <input className="rounded-full border border-red-500 p-2" onChange={(e) => setDisplayName(e.target.value) } type="text"/>
                </label>
                <label className="flex flex-col gap-y-2 text-xs">
                    Email
                    <input className="rounded-full border border-red-500 p-2" onChange={(e) => setEmail(e.target.value) } type="email"/>
                </label>
                <label className="flex flex-col gap-y-2 text-xs">
                    Password
                    <input className="rounded-full border border-red-500 p-2" onChange={(e) => setPassword(e.target.value) } type="password"/>
                </label>

                <label className="font-sm text-center font-semibold">
                    By creating an account, you agree to oCombat's <span className="text-blue-500">terms</span> and <span className="text-blue-500">privacy policy</span>
                </label>

                <div className="flex flex-col text-center gap-y-2">
                    <button
                        className="rounded-full bg-yellow-500 text-white font-medium px-4 py-2 uppercase"
                        onClick={(e) => onRegisterClick(e)}
                    >
                        Submit
                    </button>
                    <span className="flex font-gray-500 gap-x-1 justify-center">
                    Have an account?
                    <button onClick={props.loginClicked} className="bg-transparent p-0 text-blue-500">Log In</button>
                  </span>
                </div>
            </div>
        </div>

    )
}
