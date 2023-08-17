import Registration from "@/components/Registration/Registration";


export const metadata = {
    title: 'Registration | Tech Commerce',
    description: 'Anyone can Registration via firebase authentication',
  }




const page = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return (
        <div className="flex h-screen justify-center items-center">
            <div>
                <Registration />
            </div>
        </div>
    );
};

export default page;