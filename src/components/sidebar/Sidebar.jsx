import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    BookMarkIcon,
    ExploreIcon,
    HomeIcon,
    MoreIcon,
    NotificationIcon,
    ProfileIcon,
} from "../icons/icons";
const navElements = [
    {
        name: "Home",
        route: "/",
        icon: HomeIcon,
    },
    {
        name: "Explore",
        route: "/explore",
        icon: ExploreIcon,
    },
    {
        name: "Bookmarks",
        route: "/bookmarks",
        icon: BookMarkIcon,
    },
    {
        name: "Notifications",
        route: "/notifications",
        icon: NotificationIcon,
    },
    {
        name: "Profile",
        route: "/profile",
        icon: ProfileIcon,
    },
];
export default function Sidebar() {
    const [selectedButton, setSelectedButton] = useState(navElements[0].name);

    const navigate = useNavigate();

    const navigateHandler = (name, route = "/") => {
        setSelectedButton(name);
        navigate(route);
    };

    return (
        <div className="sidebar flex flex-col justify-between">
            <div className="flex flex-col gap-2 rounded-md bg-white py-4">
                {navElements.map((element) => {
                    return (
                        <button
                            className={`flex gap-6 ${
                                selectedButton === element.name
                                    ? "text-green-400 font-semibold bg-green-50  border-green-300"
                                    : "text-gray-400 border-white"
                            } font-medium border-l-4 text-base px-8 py-4 text-left`}
                            onClick={() =>
                                navigateHandler(element.name, element.route)
                            }
                        >
                            <span className="flex-shrink-0">
                                {element.icon()}
                            </span>
                            <span
                                className={`${
                                    selectedButton === element.name
                                        ? "text-gray-800"
                                        : "text-gray-400"
                                }`}
                            >
                                {element.name}
                            </span>
                        </button>
                    );
                })}
            </div>
            <div className=" px-4 py-4 rounded-md bg-white flex w-full">
                <div className="avatar flex  flex-wrap items-center justify-between w-full">
                    <div class=" flex -space-x-2 overflow-hidden items-center gap-6">
                        <img
                            class="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            alt="avatar"
                        />
                        <div className="avatar-content flex flex-col">
                            <div className="avatar-name text-md  text-sm font-semibold text-gray-700 ">
                                Raj Handa
                            </div>
                            <div className="avatar-username text-gray-400 font-medium text-xs ">
                                @rajhanda
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <MoreIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
}
