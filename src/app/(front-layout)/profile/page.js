import Profile from "@/components/Profile/Profile";



// export async function generateMetadata({ params }, parent) {
//     const {productId} = params
//     const product = await getsingleProducts(productId);
   
//     return {
//       title: product?.productFullName,
//       description: product?.productDescription.slice(0,100),
      
//     }
//   }

export const metadata = {
    title: 'Profile | Tech Commerce',
    description: 'User Profile, they can see their profile inforamtion and also can update the info',
  }



const ProfilePage = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return (
        <>
            <Profile/>
        </>
    );
};

export default ProfilePage;