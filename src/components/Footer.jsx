import React from "react";

import { useState } from 'react'
import { XFollowCard } from "../FollowCard";


// Icons
import {
    RiCheckboxBlankCircleFill,
    RiInstagramLine,
    RiFacebookLine,
    RiTwitterLine,
    RiGithubLine,
} from "react-icons/ri";


const users = [
    {
        userName: 'HarolDeveloper',
        name: 'Harold Lancheros',
        isFollowing: true
    },
    {
        userName: 'Beltry201',
        name: 'David Beltran',
        isFollowing: false
    },
    {
        userName: 'p0nch000',
        name: 'Alfonso Yague',
        isFollowing: false
    }
]


const Footer = () => {
    const [isFollowing, setIsFollowing] = useState(true)
    return (
        <footer className="bg-footer p-8 xl:p-20 text-gray-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
                {/* Logo */}
                <div className="w-1/6">
                    <a
                        href="#"
                        className="text-2xl font-bold relative p-1 bg-footer text-gray-500"
                    >
                        Eidos Tech<span className="text-primary text-5xl">.</span>{" "}
                    </a>
                </div>
                {/* Social media */}
                <nav className="flex items-center gap-4">
                    <a href="#" className="block text-white p-4 bg-primary rounded-full shadow-blue">
                        {" "}
                        <RiInstagramLine />{" "}
                    </a>
                    <a href="#" className="block text-white p-4 bg-primary rounded-full shadow-blue">
                        {" "}
                        <RiFacebookLine />{" "}
                    </a>
                    <a href="#" className="block text-white p-4 bg-primary rounded-full shadow-blue">
                        {" "}
                        <RiTwitterLine />{" "}
                    </a>
                    {/* <a href="#" className="block text-white p-4 bg-primary rounded-full">
                        {" "}
                        <RiGithubLine />{" "}
                    </a> */}
                </nav>
                <div class="grid place-content-center  gap-2">    {

                    users.map(({ userName, name, isFollowing }, index) => (
                        <XFollowCard
                            key={index}
                            userName={userName}
                            initialIsFollowingisFollowing>
                            {name}
                        </XFollowCard>

                    )
                    )

                }
                </div>

            </div>


            <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-500 text-center md:text-left">
                    Company
                </h3>
                <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <a
                        href="#"
                        className="text-gray-400 mt-4 hover:text-gray-500 transition-colors"
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 mt-4 hover:text-gray-500 transition-color"
                    >
                        Press
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 mt-4 hover:text-gray-500 transition-color"
                    >
                        Investors
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 mt-4 hover:text-gray-500 transition-color"
                    >
                        Events
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 mt-4 hover:text-gray-500 transition-color"
                    >
                        Terms of use
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 mt-4 hover:text-gray-500 transition-color"
                    >
                        Privacy policy
                    </a>
                    <button
                        type="button"
                        className="font-semibold py-2 px-6 bg-primary text-white rounded-xl shadow-blue"

                    >
                        Contact Us
                    </button>
                </nav>
            </div>
            <div className="mt-20">
                <p className="text-gray-400 text-center">
                    © eidostech 2024 - All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;