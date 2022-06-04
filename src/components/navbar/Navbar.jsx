import React from "react";

export default function Navbar() {
    return (
        <nav class="navbar bg-white p-4 h-16 flex items-center justify-between">
            <div className="nav-logo text-2xl font-semibold">Chess-Socials</div>
            <div className="nav-cta px-4 flex items-center gap-8">
                <div>
                    <div className="flex items-center gap-2  w-96 text-gray-500 bg-slate-200 p-2 rounded-md  mx-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="iconify iconify--ri"
                            width="20"
                            height="20"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                            ></path>
                        </svg>
                        <input
                            className="focus-visible:outline-none bg-transparent w-full"
                            type="text"
                        />
                    </div>
                </div>
                <div className="nav-login font-semibold">Login</div>
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
