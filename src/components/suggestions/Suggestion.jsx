import React from "react";

export default function Suggestion() {
    const profileArray = [
        {
            name: "Alan Doe",
            userName: "alandoe",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2hiMM4LY3J-nPX9QFO0URL2siUWeJP-t-A&usqp=CAU",
        },
        {
            name: "Murphy Evans",
            userName: "murphyevans",
            image: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
            name: "John Doe",
            userName: "johndoe",
            image: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Discord.jpg",
        },
    ];

    return (
        <div className="suggestions-container width-full">
            <div className="suggestions bg-white rounded-md p-4 flex flex-col gap-6">
                <h1 className="text-xl font-semibold text-gray-700">
                    Suggestions for you
                </h1>

                {profileArray.map((profile) => {
                    return (
                        <div className="avatar flex  flex-wrap items-center justify-between">
                            <div class=" flex -space-x-2 overflow-hidden items-center gap-6">
                                <img
                                    class="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-white"
                                    src={profile.image}
                                    alt="avatar"
                                />
                                <div className="avatar-content flex flex-col">
                                    <div className="avatar-name text-md  text-sm font-semibold text-gray-700 ">
                                        {profile.name}
                                    </div>
                                    <div className="avatar-username text-gray-400 font-medium text-xs ">
                                        @{profile.userName}
                                    </div>
                                </div>
                            </div>
                            <button className=" bg-green-400 text-gray-100 font-semibold px-3 py-1  rounded-md">
                                Follow
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
