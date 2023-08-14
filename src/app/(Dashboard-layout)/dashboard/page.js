import Dashboard from "@/components/Dashboard/Dashboard";

const Dashbaord = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return (
        <>
            <Dashboard/>
        </>
    );
};

export default Dashbaord;