import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/header"

export default function Home() {
    return (
        <div className="overflow-hidden">
            <div className="flex flex-col bg-gradient-to-r from-purple-500 to-indigo-500 items-center min-h-screen justify-center">

                <Header />

                {/* Content */}
                <div className="flex flex-grow items-center px-16">
                    <div className="flex flex-col w-3/5 gap-y-8">
                        <h1 className="text-8xl font-bold text-white">
                            Call of Duty tournaments for all skill levels
                        </h1>

                        <div className="flex gap-x-4">
                            <Link to='/tournaments' className="rounded-full bg-yellow-500 font-semibold px-4 py-2 uppercase">
                                Find a tournament
                            </Link>

                            <button className="rounded-full bg-white font-semibold px-4 py-2 uppercase">
                                Join us on Discord
                            </button>
                        </div>
                    </div>

                    <img src="/images/home-image.png" className="w-1/2 self-end" alt="COD"/>

                </div>

            </div>
        </div>
    );


}
