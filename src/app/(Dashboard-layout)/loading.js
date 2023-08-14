import loadingGIF from "@/../public/loadingGIF.gif"
import Image from "next/image";
const loading = () => {
    return (
        <div className=" h-[50vh] flex items-center justify-center">
            <Image src={loadingGIF} width={80} height={80} alt="loading gif"/>
        </div>
    );
};

export default loading;