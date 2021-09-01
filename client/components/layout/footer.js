import Link from 'next/link';
import React from "react";

export default function Footer() {
    return <div className="p-16 bg-blue-900">
        <div className="sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row mb-8">
            <div className="flex-grow md:mb-5 w-1/3">
                <h1 class="text-2xl font-black text-white">oCombat</h1>
                <a className="bg-yellow-500 rounded-lg font-semibold px-3 py-2 text-white inline-block mt-3" href="">Join our Discord Server</a>
                <div className="my-3">
                    <img src="/images/fb.png" className="object-contain w-8 h-6 inline-block" alt="COD"/>
                    <img src="/images/instagram.png"  className="object-contain w-8 h-6 inline-block" alt="COD"/>
                    <img src="/images/twitter.png" className="object-contain w-8 h-6 inline-block" alt="COD"/>
                </div>
            </div>
            <div className="flex-grow md:mb-5 w-1/3">
                <ul className="list-none text-white">
                    <li className="mb-3"><Link href="/">Home</Link></li>
                    <li className="mb-3"><a href="">About</a></li>
                    <li className="mb-3"><Link href="/tournaments">Tournaments</Link></li>
                    <li className="mb-3"><a href="">Rules</a></li>
                    <li className="mb-3"><a href="">Careers</a></li>
                </ul>

            </div>
            <div className="flex-grow w-1/3">
                <ul className="list-none text-white">
                    <li className="mb-3"><a href="">FAQ</a></li>
                    <li className="mb-3"><a href="">Partner with <b>oCombat</b></a></li>
                    <li className="mb-3"><a href="">Contact</a></li>
                    <li className="mb-3"><a href="">Disclaimer</a></li>
                </ul>

            </div>
        </div>
        <div className=" py-10 border-t">
            <p className="text-white text-center text-sm">oCombat is not endored by, directly affiliated with, maintained or sponsored by Apple Inc, Activision Blizzard, Microsoft, Xbox, Sony, Playstation or Epic Games. All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners.</p>
        </div>
            <p className="text-center mt-14 text-white text-sm"><a href="" className="mr-5">Tearms of Service | Privacy Policy</a> &copy;2021 All right reserved</p>
    </div>
}