"use client"
import Lottie from "lottie-react";
import notfound from "@/../public/notFound.json";

import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="max-w-[800px] h-48 mx-auto">
            <Lottie animationData={notfound} loop={true} />
            <div>
                <Link href="/">
                <button className="buttonStyle rounded-md  bg-primaryColor hover:bg-[#0065a3] w-full py-5 transition-all">Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;