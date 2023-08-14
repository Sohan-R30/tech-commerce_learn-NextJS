import Registration from "@/components/Registration/Registration";

const page = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return (
        <div className="flex h-screen justify-center items-center">
            <div>
                <Registration />
            </div>
        </div>
    );
};

export default page;