import React, { Component } from "react";
import Link from 'next/link'

export default class Header extends Component {
    render() {
        return (
            <div className="flex p-4 w-full">
                <div className="flex flex-grow">
                    <h1 className="text-2xl font-black text-white">oCombat</h1>
                </div>
                <div className="flex flex-grow items-center gap-3 font-bold text-white">
                    <Link href="/tournaments">Tournaments</Link>
                    <Link href="/">Testimonials</Link>
                    <Link href="/">Divisions</Link>
                    <Link href="/">Rules</Link>
                    <Link href="/">FAQ</Link>
                </div>

                <div className="flex items-center text-xs gap-x-2">
                  <button className="font-bold text-white p-2 uppercase">Login</button>
                  <button className="rounded-full bg-yellow-500 text-white font-medium px-4 py-2 uppercase">Register</button>
                </div>


            </div>
        );
    }


}
