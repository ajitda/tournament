import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Modal, ModalBody } from 'reactstrap';

import Register from "../auth/register";
import Login from "../auth/login";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authToken: localStorage.authToken,
            showRegistrationForm: false,
            showLoginForm: false,
        };
    }

    registerClicked = (e) => {
        e.preventDefault();
        this.setState({
            showRegistrationForm: true,
            showLoginForm: false,
        });
    }
    loginClicked = (e) => {
        e.preventDefault();
        this.setState({
            showRegistrationForm: false,
            showLoginForm: true,
            authToken: localStorage.authToken, // Checking if user has looged in
        });
    }

    logOut = (e) => {
        localStorage.authToken = ''
        localStorage.displayName = ''
        this.setState({
            authToken: '',
            showLoginForm: true,
        })
    }

    render() {
        return (
            <div className="flex p-4 w-full">
                {/* BEGIN: Modals */}
                <Modal
                    isOpen={this.state.showLoginForm}
                    toggle={() => this.setState({showLoginForm: false})}
                >
                    <ModalBody>
                        <Login registerClicked={this.registerClicked}/>
                    </ModalBody>
                </Modal>

                <Modal
                    isOpen={this.state.showRegistrationForm}
                    toggle={() => this.setState({showRegistrationForm: false})}
                >
                    <ModalBody>
                        <Register loginClicked={this.loginClicked}/>
                    </ModalBody>
                </Modal>
                {/* END: Modals */}

                <div className="flex flex-grow">
                    <h1 className="text-2xl font-black text-white">oCombat</h1>
                </div>
                <div className="flex flex-grow items-center gap-3 font-bold text-white">
                    <NavLink to="/tournaments">Tournaments</NavLink>
                    <NavLink to="/">Testimonials</NavLink>
                    <NavLink to="/">Divisions</NavLink>
                    <NavLink to="/">Rules</NavLink>
                    <NavLink to="/">FAQ</NavLink>
                </div>

                {/* If user is not logged in */}
                {!this.state.authToken &&
                <div className="flex items-center text-xs gap-x-2">
                    <button onClick={this.loginClicked} className="font-bold text-white p-2 uppercase">Login</button>
                    <button onClick={this.registerClicked} className="rounded-full bg-yellow-500 text-white font-medium px-4 py-2 uppercase">Register</button>
                </div>
                }

                {/* If user is logged in */}
                {this.state.authToken &&
                <div className="flex items-center text-xs gap-x-2">
                    <Link to="/profile" className="rounded-full border border-white text-white font-medium px-4 py-2 uppercase">My Profile</Link>
                    <button onClick={this.logOut} className="rounded-full border border-white text-white font-medium px-4 py-2 uppercase">
                        >
                    </button>
                </div>
                }

            </div>
        );
    }


}
