import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/../public/logo.png"

const LoginHeader = () => {
    return (
        <div className='mt-20 flex justify-around flex-wrap'>
            <Link href="/">
                <div className="flex items-end h-5 mt-3">
                    <p className="textStrock">Tech </p>
                    <div className="px-2 ">
                        <Image src={logo} height={50} width={55} alt="logo image" />
                    </div>
                    <p className="textStrock">Commerce </p>
                </div>
            </Link>
            <div>
                <Link href="/">
                <button className='buttonStyle bg-primaryColor rounded-md'>Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default LoginHeader;