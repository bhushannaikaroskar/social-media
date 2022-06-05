import React from "react";
import { LogoIcon, SearchIcon } from "../icons/icons";

export default function Navbar() {
    return (
        <nav class="navbar bg-white p-4 h-16 flex items-center justify-between">
            <div className="nav-logo text-2xl font-semibold logo-color flex">
                <span className="text-stone-800">
                 <LogoIcon/>
                
                </span>
                <span className="text-stone-800"><span className="text-green-500">Chess</span> Socials</span></div>
            <div className="nav-cta px-4 flex items-center gap-8">
                <div>
                    <div className="flex items-center gap-2  w-96 text-gray-500 bg-slate-200 p-2 rounded-md  mx-4">
                        <SearchIcon/>
                        <input
                            className="focus-visible:outline-none bg-transparent w-full"
                            type="text"
                        />
                    </div>
                </div>
                <div class=" flex -space-x-2 overflow-hidden">
                    <img
                        class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                        src="https://static.remove.bg/remove-bg-web/6ad52d54336ad62d58e7bd1317d40fb98e377ad5/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                        alt="avatar"
                    />
                </div>
            </div>
        </nav>
    );
}
