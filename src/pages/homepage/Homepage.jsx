import React from "react";
import PostCard from "../../components/cards/PostCard";

const cardArray = [
    {
        name: "Alan Doe",
        username: "alandoe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2hiMM4LY3J-nPX9QFO0URL2siUWeJP-t-A&usqp=CAU",
        content:
            "Hey folks! starting up my new project. Need some enlightment which framework to use",
    },
    {
        name: "Murphy Evans",
        username: "murphyevans",
        image: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        content:
            "Hey folks! starting up my new project. Need some enlightment which framework to use",
    },
    {
        name: "John Doe",
        username: "johndoe",
        image: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Discord.jpg",
        content:
            "Hey folks! starting up my new project. Need some enlightment which framework to use",
    },
];

export default function Homepage() {
    return (
        <div className="main flex flex-col gap-2">
            <span className="font-medium text-xl">Feeds</span>
            {cardArray.map((card) => {
                return <PostCard {...card} />;
            })}
            {cardArray.map((card) => {
                return <PostCard {...card} />;
            })}
        </div>
    );
}
