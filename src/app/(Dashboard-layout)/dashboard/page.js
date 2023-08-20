import Dashboard from "@/components/Dashboard/Dashboard";

export const metadata = {
    title: 'Dashboard | Tech Commerce',
  }

// TODO: DYNAMIC METADATA DASHBOARD USER

const Dashbaord = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return (
        <>
            <Dashboard/>
        </>
    );
};

export default Dashbaord;