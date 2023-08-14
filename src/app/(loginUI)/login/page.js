import Login from "@/components/Login/Login";


const LoginPage = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return (
        <div className="flex h-screen justify-center items-center">
            <div>
                <Login />
            </div>
        </div>
    );
};

export default LoginPage;