"use client"
import { useRouter } from "next/navigation";


const GotoDashboard = () => {
    const router = useRouter();
    return (
        <div className="text-end">
            <button onClick={() => router.push("/dashboard")} className="buttonStyle bg-primaryColor rounded-md">Go to Dashboard</button>
        </div>
    );
};

export default GotoDashboard;