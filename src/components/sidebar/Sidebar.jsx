import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    BookMarkIcon,
    ExploreIcon,
    HomeIcon,
    NotificationIcon,
    ProfileIcon,
} from "../icons/icons";
const navElements = [
    {
        name: "Home",
        route:"/",
        icon: HomeIcon,
    },
    {
        name: "Explore",
        route:"/explore",
        icon: ExploreIcon,
    },
    {
        name: "Bookmarks",
        route:"/bookmarks",
        icon: BookMarkIcon,
    },
    {
        name: "Notifications",
        route:"/notifications",
        icon: NotificationIcon,
    },
    {
        name: "Profile",
        route:"/profile",
        icon: ProfileIcon,
    },
];
export default function Sidebar() {
    const [selectedButton, setSelectedButton] = useState(navElements[0].name);

    const navigate = useNavigate();

    const navigateHandler = (name,route="/") => {
        setSelectedButton(name);
        navigate(route)
    }

    return (
        <div className="sidebar">
            <div className="flex flex-col gap-2 rounded-md bg-white py-4">
                {navElements.map((element) => {
                    return (
                        <button
                            className={`flex gap-6 ${
                                selectedButton === element.name
                                    ? "text-green-400 font-semibold bg-green-50  border-green-300"
                                    : "text-gray-400 border-white"
                            } font-medium border-l-4 text-base px-8 py-4 text-left`}
                            onClick={() => navigateHandler(element.name,element.route)}
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
        </div>
    );
}
