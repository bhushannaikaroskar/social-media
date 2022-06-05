import React from "react";
import {
    BookMarkIcon,
    CommentsIcon,
    LikeIcon,
    MoreIcon,
    ShareIcon,
} from "../icons/icons";

export default function PostCard({
    name,
    username,
    content,
    image = "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
}) {
    return (
        <div className="rounded-md px-6 py-4 bg-white">
            <div className="post flex gap-4 items-start">
                <div className="post-avatar flex-grow-0 shrink-0">
                    <img
                        class="inline-block object-cover h-12 w-12 rounded-full ring-2 ring-white"
                        src={image}
                        alt="avatar"
                    />
                </div>
                <div className="post-content flex flex-col gap-2 flex-grow">
                    <div className="post-header font-medium flex flex-col ">
                        <span>{name}</span>
                        <span className="font-sm text-sm text-gray-400">
                            @{username}
                        </span>
                    </div>
                    <div className="post-message text-gray-800 ">{content}</div>
                    <div className="post-content-cta py-2 flex justify-between">
                        <button className="text-gray-400">
                            <LikeIcon />
                        </button>

                        <button className="text-gray-400">
                            <CommentsIcon />
                        </button>

                        <button className="text-gray-400">
                            <ShareIcon />
                        </button>

                        <button className="text-gray-400">
                            <BookMarkIcon />
                        </button>
                    </div>
                </div>
                <button className="post-cta text-gray-600">
                    <MoreIcon />
                </button>
            </div>
        </div>
    );
}
