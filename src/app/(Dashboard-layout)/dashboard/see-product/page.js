import GotoDashboard from "@/components/Dashboard/GotoDashboard";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png"


const SeeProductPage = () => {
    return (
        <div className="mt-20">
            <div className="flex justify-between">
                <Link href="/">
                    <div className="flex items-end h-5 mt-3">
                        <p className="textStrock">Tech </p>
                        <div className="px-2 ">
                            <Image src={logo} height={50} width={55} alt="logo image" />
                        </div>
                        <p className="textStrock">Commerce </p>
                    </div>
                </Link>
                <GotoDashboard />
            </div>
        </div>
    );
};

export default SeeProductPage;