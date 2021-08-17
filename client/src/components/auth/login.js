import React, {Component, useState} from 'react'
import {Redirect} from "react-router-dom"
import { Cookies } from "react-cookie";
import { usePostApi } from "../../utils/auth";

// Setting up cookies
const cookies = new Cookies()

export default function Login(props) {
    const [error, setError] = useState('');
    const [token, setToken] = useState(localStorage.authToken || null);
    const [displayName, setDisplayName] = useState(localStorage.displayName || null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authToken, setAuthToken] = useState('')
    const [disError, setDisError] = useState('');

    const api = usePostApi

    async function onLoginClick(e) {
        /* eslint-disable no-console */
        e.preventDefault()
        const { data, error } = await api("/auth/log-in", {
            email: email,
            password: password
        });

        console.log(data, error);

        if (!error) {
            localStorage.setItem('authToken', data.token)
            localStorage.setItem('displayName', data.user.displayName)
            setDisplayName(data.displayName)
            setAuthToken(data.token)
        } else {
            setDisError(error)
        }
    }

    return (
        <div className="flex w-full justify-center">
            {authToken ? <Redirect to="/profile" /> : ''}
            <div className="flex flex-col p-6 md:max-w-lg gap-y-6">
                <h1 className="text-4xl font-bold text-center">
                    Sign in to your account
                </h1>
                <label className="flex flex-col gap-y-2 text-xs">
                    Email
                    <input className="rounded-full border border-red-500 p-2" onChange={(e) => setEmail(e.target.value ) } type="text"/>
                </label>
                <label className="flex flex-col gap-y-2 text-xs">
                    Password
                    <input className="rounded-full border border-red-500 p-2" onChange={(e) => setPassword(e.target.value ) } type="password"/>
                </label>

                <div className="flex flex-col text-center gap-y-2">
                    <button
                        className="rounded-full bg-yellow-500 text-white font-medium px-4 py-2 uppercase"
                        onClick={(e) => onLoginClick(e)}
                    >
                        Login
                    </button>
                    <span>{disError}</span>
                    <span className="flex font-gray-500 gap-x-1 justify-center">
                    Doesn't have an account?
                    <button onClick={props.registerClicked} className="bg-transparent p-0 text-blue-500">Register</button>
                  </span>
                </div>
            </div>
        </div>

    )
}
