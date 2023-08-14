'use client'
import Lottie from "lottie-react";
import errorPage from "@/../public/errorPage.json";

export default function Error({ error, reset }) {


    return (
        <div className="flex flex-col gap-10">
            <div className="max-w-[800px] mx-auto">
                <Lottie animationData={errorPage} loop={true} />
            </div>
            <div className="text-center">
                <p className="text-xl tracking-wider">{error?.message}</p>
            </div>
            <button className="text-2xl bg-black rounded-md px-3 py-2 text-white max-w-xs mx-auto"
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}